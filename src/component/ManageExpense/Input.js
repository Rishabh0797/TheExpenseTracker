import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../contants/styles";
import { RFValue } from "react-native-responsive-fontsize";

function Input({
  label,
  textInputConfig,
  intputCustomStyles,
  isTextInputValid,
}) {
  const inputStyles = [styles.textInput];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }

  return (
    <View style={[styles.inputContainer, intputCustomStyles]}>
      <Text style={{ ...styles.label }}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[inputStyles, !isTextInputValid ? styles.notValidTextInput : null]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: "3%",
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: RFValue(12),
    paddingLeft: "2%",
  },
  textInput: {
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
    fontSize: RFValue(15),
    borderRadius: 6,
    padding: "3%",
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  notValidTextInput: {
    backgroundColor: GlobalStyles.colors.error50,
    borderWidth: 1,
    borderColor: "red",
  },
});
