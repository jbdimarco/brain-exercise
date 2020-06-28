import React from "react";
import { View, Text } from "react-native";
import { Slider } from "react-native-elements";

function FontSlider() {
  return (
    <View style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}>
      <Slider
        value={this.state.value}
        onValueChange={(value) => this.setState({ value })}
      />
      <Text>Value: {this.state.value}</Text>
    </View>
  );
}

export default FontSlider;
