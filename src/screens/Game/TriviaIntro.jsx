import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { Audio } from 'expo-av';
import PropTypes from "prop-types";
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from '../../styles/intro';
import useSoundSetting from "../../scripts/useSoundSetting";

const sound = require('../../assets/writing.mp3');
const image = require("../../assets/Trivia_Icon.png");

function TriviaIntro({ navigation, route }) {
  const shouldPlay = useSoundSetting();

  useEffect(() => {
    const soundObject = new Audio.Sound();
    async function play() {
      await soundObject.loadAsync(sound);
      soundObject.playAsync();
    }
    if (shouldPlay.voiceOverOn) {
      play();
    }
    return () => {
      soundObject.unloadAsync();
    };
  });

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>Grab a pencil and some paper.</Text>
        <Text style={styles.subInstructions}>Writing is a great way to exercise your brain so please write each trivia question first before answering.</Text>
        <Text style={styles.instructions}>Total time: 5 minutes</Text>
      </View>
      <Button
        title="Start Writing"
        buttonStyle={styles.nextButton}
        onPress={() => navigation.navigate("TriviaScreen", { shouldReturn: route.params ? route.params.shouldReturn : false })}
      />
    </View>
  );
}

TriviaIntro.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default TriviaIntro;
