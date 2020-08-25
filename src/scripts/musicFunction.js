import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Audio } from "expo-av";
import defaultSettings from "../components/DefaultSettings";

const buttonPressSound = require("../assets/audio/buttonPress.mp3");
/**
 * Pulls an object containing the app settings from Async Storage and returns it.
 * If no settings exist in Async Storage, default settings are pushed and returned.
 */
const pullSettings = async () => {
  const jsonSettings = await AsyncStorage.getItem("SETTINGS");
  if (jsonSettings !== null) {
    const result = await JSON.parse(jsonSettings);
    return result;
  }
  return defaultSettings;
};

const playSound = async () => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(buttonPressSound);
    await soundObject.playAsync();
    await soundObject.unloadAsync();
  } catch (error) {
    console.log("error occurred");
    // error
  }
};

const musicFunction = () => {
  return new Promise((resolve, reject) => {
    pullSettings().then((setting) => {
      if (setting.soundEffectsOn) {
        const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        playSound();
        wait()
          .then(() => resolve())
          .catch((error) => console.log("musicFunction play", error));
      } else {
        console.log("Make sure the settings is turned on");
        resolve();
      }
    });
  });
};

export default musicFunction;
