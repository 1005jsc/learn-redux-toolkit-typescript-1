import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../modules/counter';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { todosReducer } from '../modules/todos';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
