import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from "../../utils/button";

function ExpenseForm({
  cancelHandler,
  submitButtonLabel,
  onSubmit,
  defaultValues, //in case of editing
}) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: { value: defaultValues ? defaultValues.date : "", isValid: true },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  let inputChangeHandler = (identifier, enteredValue) => {
    setInputValues((initialState) => {
      return {
        ...initialState,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  function confirmHandler() {
    let expenseItem = {
      amount: +inputValues.amount.value,
      date: inputValues.date.value,
      description: inputValues.description.value,
    };
    let amountIsValid = !isNaN(expenseItem.amount) && expenseItem.amount > 0; //number and empty check
    let dateIsValid = new Date(expenseItem.date).toString() != "Invalid Date";
    let descriptionIsValid = expenseItem.description.trim().length > 0; //empty check
    console.log(" date is valie", expenseItem.date.toString(),new Date(expenseItem.date).toString());
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputValues((initialState) => {
        return {
          amount: {
            value: initialState.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: initialState.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: initialState.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      Alert.alert("Invalid Input");
      return;
    }
    onSubmit(expenseItem);
  }
  return (
    console.log(inputValues),
    (
      <View style={{ ...styles.form }}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={{ ...styles.inputContainer }}>
          <Input
            label={"Amount"}
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"), // using currying
              value: inputValues.amount.value,
            }}
            isTextInputValid={inputValues.amount.isValid}
          />
          <Input
            label={"Date"}
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: "10",
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: inputValues.date.value,
            }}
            isTextInputValid={inputValues.date.isValid}
          />
          <Input
            label={"Description"}
            textInputConfig={{
              multiline: true,
              onChangeText: inputChangeHandler.bind(this, "description"),
              value: inputValues.description.value,
            }}
            isTextInputValid={inputValues.description.isValid}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: "10%",
            // backgroundColor: "wheat",
            paddingTop: "5%",
          }}
        >
          <CustomButton
            onPressFunc={cancelHandler}
            mode="flat"
            title={"Cancel"}
            style={{ flex: 1 }}
          />
          <CustomButton
            onPressFunc={confirmHandler}
            title={submitButtonLabel}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    )
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginHorizontal: "5%",
    marginTop: "5%",
  },
  inputContainer: {
    marginTop: "3%",
  },
  title: {
    fontSize: RFValue(18),
    color: "white",
    fontWeight: "bold",
    marginLeft: "1%",
  },
});
