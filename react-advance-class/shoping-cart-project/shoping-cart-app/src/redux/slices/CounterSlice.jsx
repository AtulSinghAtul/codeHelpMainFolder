//! Step [1]::-->> slice create karenge
import { createSlice } from "@reduxjs/toolkit";

//! create slice k andar tin step hamesha karenge--
//* Step 1(a):--> name dena slice ko
//* Step 1(a):--> Initial state batana
//* Step 1(a):--> reducers
const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducer: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
