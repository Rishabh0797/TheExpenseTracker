import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../contants/styles";
import { RFValue } from "react-native-responsive-fontsize";

function ExpensesOutput({ expensesPeriod, expenseList, fallBackText }) {
  return (
    // console.log(list),
    <View style={{ ...styles.container }}>
      <ExpensesSummary expenses={expenseList} expensesPeriod={expensesPeriod} />
      {expenseList.length > 0 ? (
        <ExpensesList expenses={expenseList} />
      ) : (
        <View style={{ ...styles.fallBackView }}>
          <Text
            style={{
              fontSize: RFValue(13),
              color: GlobalStyles.colors.primary50,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {fallBackText}
          </Text>
        </View>
      )}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingHorizontal: "2%",
    paddingTop: "5%",
    paddingBottom: 0,
  },
  fallBackView: {
    // backgroundColor: "pink",
    padding: "5%",
    marginTop: "2%",
  },
});
