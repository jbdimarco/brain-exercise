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
        console.log("song loaded")
        await soundObject.playAsync(); // Sound better play
        console.log("song should have played by now")
        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        await soundObject.unloadAsync();
        console.log("song unloaded from memory")  
    } catch (error) {
        console.log(error)
    }
}

// const musicFunction = () => {
//   const [settings, setSettings] = useState(defaultSettings);
//   useEffect(() => {
//     pullSettings().then((setting) => setSettings(setting));
//   }, []);
//   if (settings.soundEffectsOn) {
//       playSound()
//   }
// };

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