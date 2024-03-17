import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { GlobalStyles } from "../contants/styles";

function CustomButton({ title, onPressFunc, mode, style }) {
  return (
    <View style={{ ...style }}>
      <Pressable
        onPress={onPressFunc}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode == "flat" && styles.flatText]}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: "5%",
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(13),
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
});
