import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { GlobalStyles } from "../contants/styles";
import CustomButton from "../utils/button";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, addItem } from "../redux/ExpenseListSlice";
import ExpenseForm from "../component/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
  // let list = useSelector((state) => state.ExpenseListItems.data);
  const dispatch = useDispatch();
  const expenseEditId = route.params?.expenseItem.id;
  const isEditing = !!expenseEditId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteIconHandler(itemId) {
    dispatch(deleteItem({ id: itemId }));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  let onSubmit = (item) => {
    dispatch(addItem({ ...item, id: new Date().getTime() + "" }));
    cancelHandler();
  };
  return (
    <View style={{ ...styles.container }}>
      <ExpenseForm
        defaultValues={isEditing ? route.params?.expenseItem : null}
        onSubmit={onSubmit}
        cancelHandler={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
      />
      {/* <View
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
          onPress={confirmHandler}
          title={isEditing ? "Update" : "Add"}
          style={{ flex: 1 }}
        />
      </View> */}
      {isEditing && (
        <View style={{ ...styles.deleteContainer }}>
          {/* <MaterialCommunityIcons
            name="delete"
            size={RFValue(37)}
            color={GlobalStyles.colors.error500}
            onPress={() => {
              deleteIconHandler(expenseEditId);
            }}
          /> */}
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    borderTopColor: "white",
    paddingTop: "4%",
    borderTopWidth: 2,
    marginTop: "4%",
    alignItems: "center",
    marginHorizontal: "5%",
  },
});
