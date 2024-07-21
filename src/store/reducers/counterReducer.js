import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    addCount: (state, action) => {
      console.log(action.payload);
      state.count += 1;
    },
  },
});

export const CounterSelector = (state) => state.counter;
export const { addCount } = counterSlice.actions;
export default counterSlice.reducer;
