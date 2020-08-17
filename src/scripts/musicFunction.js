import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-community/async-storage";
import { Audio } from 'expo-av'
import defaultSettings from "../components/DefaultSettings";

const buttonPressSound = require('../assets/audio/buttonPress.mp3')
/**
 * Pulls an object containing the app settings from Async Storage and returns it.
 * If no settings exist in Async Storage, default settings are pushed and returned.
 */
const pullSettings = async () => {
    const jsonSettings = await AsyncStorage.getItem("SETTINGS")
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
        // error
    }
}


const musicFunction = () => {
    pullSettings().then((setting) => {
        if (setting.soundEffectsOn) {
            playSound()
        } else {
            console.log("Make sure the settings is turned on")
        }
    });
}  

export default musicFunction;