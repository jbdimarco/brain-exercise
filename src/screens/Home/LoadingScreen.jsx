import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

function LoadingScreen() {
  return (
    <View styles={styles.root}>
      <Text>Brain Exercise Initiative</Text>
    </View>
  );
}

export default LoadingScreen;
