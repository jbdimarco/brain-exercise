import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    alignContent: "space-between",
    backgroundColor: "#005AA3",
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTitle: {
    fontSize: 25,
    color: "white",
  }
});

function Pause({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}> {"You're just getting started. Keep going!"} </Text>
      <Button
        title="Resume"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Return to Home"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

Pause.propTypes = {
  navigation: PropTypes.object,
};

export default Pause;
