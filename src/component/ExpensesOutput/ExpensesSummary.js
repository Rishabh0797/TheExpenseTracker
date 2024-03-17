import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { GlobalStyles } from "../../contants/styles";

function ExpensesSummary({ expenses, expensesPeriod }) {
  let expensesSum = expenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  return (
    // console.log(props),
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.period }}>{expensesPeriod}</Text>
      <Text style={{ ...styles.amount }}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    padding: "4%",
  },
  period: {
    fontSize: RFValue(12),
    color: GlobalStyles.colors.primary400,
  },
  amount: {
    fontSize: RFValue(16),
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
