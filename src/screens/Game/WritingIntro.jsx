import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { Audio } from 'expo-av';
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-community/async-storage";
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from '../../styles/intro';

const image = require("../../assets/Prompts_Icon.png");
const sound = require('../../assets/writing.mp3');

// Each article has a readAlready field to check if it should be presented again
// The text is a text array where the text is split up by \n characters

function WritingIntro({ navigation, route }) {
  const soundObject = new Audio.Sound();

  useEffect(() => {
    async function play() {
      const storedSettings = await AsyncStorage.getItem("SETTINGS");
      const settings = await JSON.parse(storedSettings);
      if (settings.voiceOverOn) {
        await soundObject.loadAsync(sound);
        await soundObject.playAsync();
      }
    }
    play();
    return () => {
      soundObject.unloadAsync();
    };
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>
          Grab some paper and a pencil and write what you see
        </Text>
        <Text style={styles.instructions}>Total time: 5 minutes</Text>
      </View>
      <Button
        title="Start Writing"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("PromptScreen", { shouldReturn: route.params ? route.params.shouldReturn : false })}
      />
    </View>
  );
}

WritingIntro.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default WritingIntro;
