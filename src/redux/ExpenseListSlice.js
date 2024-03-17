import { createSlice } from "@reduxjs/toolkit";

export const ExpenseListSlice = createSlice({
  name: "counter",
  initialState: {
    data: [
      {
        id: "1e",
        description: "Bought a pair of shoes",
        amount: 80000.0,
        date: "2022-12-09",
      },
      {
        id: "2e",
        description: "TV recharge bill",
        amount: 159.5,
        date: "2022-11-09",
      },
      {
        id: "3e",
        description: "Daily needs",
        amount: 456.5,
        date: "2022-12-19",
      },
      {
        id: "4e",
        description: "Bought new hoddies",
        amount: 123.9,
        date: "2022-12-29",
      },
      {
        id: "5e",
        description: "Bought a pair of Jordans",
        amount: 234.0,
        date: "2022-12-11",
      },
      {
        id: "6e",
        description: "Electricity bill",
        amount: 8159.5,
        date: "2022-09-09",
      },
      {
        id: "7e",
        description: "Dairy products",
        amount: 259.99,
        date: "2022-12-20",
      },
      {
        id: "8e",
        description: "Bought new specs",
        amount: 2123.9,
        date: "2022-06-29",
      },
      {
        id: "9e",
        description: "Bought biscuits",
        amount: 34.0,
        date: "2022-01-11",
      },
    ],
  },
  reducers: {
    updateList: (state, action) => {},
    addItem: (state, action) => {
      // console.log("slice=>",action.payload)
      state.data.push(action.payload)
    },
    deleteItem: (state, action) => {
      let newList = state.data.filter((item) => item.id != action.payload.id);
      //   console.log(newList);
      state.data = newList;
    },
  },
});

export const updateList = ExpenseListSlice.actions.updateList;
export const deleteItem = ExpenseListSlice.actions.deleteItem;
export const addItem = ExpenseListSlice.actions.addItem;
export default ExpenseListSlice.reducer;
