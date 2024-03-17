import React from "react";
import { View, Text, FlatList } from "react-native";
import ExpensesListItems from "./ExpensesListItems";

function ExpensesList({ expenses }) {
  function renderExpenses({ item }) {
    return <ExpensesListItems item={item} />;
  }
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenses}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
