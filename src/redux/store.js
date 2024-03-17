import { configureStore } from "@reduxjs/toolkit";
import ExpenseListSlice from "./ExpenseListSlice";

export const store = configureStore({
  reducer: {
    ExpenseListItems: ExpenseListSlice,
  },
});
