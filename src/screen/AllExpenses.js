import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

function AllExpenses() {
  let expenseList = useSelector((state) => state.ExpenseListItems.data);
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenseList={expenseList}
      fallBackText={"No Expense registered!"}
    />
  );
}

export default AllExpenses;
