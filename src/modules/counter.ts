import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type StateType = {
  number: number;
  diff: number;
};

const initialState: StateType = {
  number: 0,
  diff: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // : PayloadAction<number>
    setDiff: (state, action: PayloadAction<number>) => {
      state.diff = action.payload;
      console.log(state.diff);
    },
    increase: (state, action) => {
      state.number += state.diff;
      console.log(state.number);
    },
    decrease: (state, action) => {
      state.number -= state.diff;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const counterActions = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.number
