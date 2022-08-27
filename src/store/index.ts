import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../modules/counter';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { todosReducer } from '../modules/todos';
import { postsReducer } from '../modules/posts';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    posts: postsReducer,
  },
});
export default store;

// 아래 작업은 typescript을 연동할 경우, useSelector, useDispatch를 더이상 쓰지 않고
// useAppSelector, useAppDispatch를 쓴다

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
