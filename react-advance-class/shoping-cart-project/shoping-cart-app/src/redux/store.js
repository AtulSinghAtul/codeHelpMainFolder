import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/CounterSlice";

// ! Global centralised store create karna.
export const store = configureStore({
  reducer: {
    //? counter key createSlice() function se aaya hai jo hamne name key ki value (name: counter) di thi
    counter: CounterSlice,
  },
});
