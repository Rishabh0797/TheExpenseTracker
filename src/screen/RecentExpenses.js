import React, { useState } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

function RecentExpenses() {
  let expenseList = useSelector((state) => state.ExpenseListItems.data);

  let Last7Days = expenseList.filter((item) => {
    let date7DaysAgo = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
    let now = new Date().getTime();
    let itemDate = new Date(item.date);

    return itemDate >= date7DaysAgo && itemDate <= now;
  });

  return (
    // console.log(Last7Days),
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenseList={Last7Days}
      fallBackText={"No Expense registered from Last 7 Days!"}
    />
  );
}

export default RecentExpenses;
