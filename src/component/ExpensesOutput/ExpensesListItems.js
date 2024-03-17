import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { GlobalStyles } from "../../contants/styles";
import { useNavigation } from "@react-navigation/native";

function ExpensesListItems({ item }) {
  let navigation = useNavigation();
  return (
    // console.log(item),
    <Pressable
      style={({ pressed }) => [pressed ? { opacity: 0.5 } : null]}
      onPress={() => {
        navigation.navigate("ManageExpense", {
          expenseItem: item,
        });
      }}
    >
      <View style={{ ...styles.container }}>
        <View style={{ flex: 4 }}>
          <Text style={{ ...styles.description }}>{item.description}</Text>
          <Text style={{ ...styles.textBase }}>{item.date}</Text>
        </View>
        <View style={{ ...styles.amountConatiner, flex: 1.5 }}>
          <Text style={{ ...styles.amount }}>{item.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesListItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "3%",
    paddingVertical: "4%",
    marginVertical: 6,
    borderRadius: 8,
    elevation: 3,
    //shadow ios
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
  },
  textBase: {
    color: GlobalStyles.colors.accent500,
    fontSize: RFValue(12),
  },
  description: {
    fontSize: RFValue(16),
    marginBottom: "3%",
    fontWeight: "bold",
    color: GlobalStyles.colors.primary50,
  },
  amountConatiner: {
    // paddingHorizontal: "2%",
    paddingVertical: "5%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    heigth: "100%",
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "700",
    fontSize: RFValue(12),
  },
});
