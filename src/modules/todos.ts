import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoType = {
  id: number;
  text: string;
  done: boolean;
};

const initialState: TodoType[] = [];

let nextId = 1;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: nextId++,
        text: action.payload,
        done: false,
      });
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const todosActions = todosSlice.actions;
