import React from "react";
import { Button as BaseButton } from "react-native-elements";
import PropTypes from "prop-types";
import musicFunction from "../scripts/musicFunction";

const Button = (props) => {
  return (
    <BaseButton
      {...props}
      onPress={() => {
        musicFunction();
        props.onPress();
      }}
      buttonStyle={{
        alignSelf: "center",
        marginVertical: 10,
        width: 300,
        height: 60,
        borderRadius: 5,
        backgroundColor: "#005AA3",
      }}
    >
      {props.children}
    </BaseButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  buttonStyle: PropTypes.object,
  onPress: PropTypes.func,
};

export default Button;
