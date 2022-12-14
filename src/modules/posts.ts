import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostById, getPosts, PostType } from '../data/PostsData';

type GetPostsStateType = {
  loading: boolean;
  data: PostType[] | null;
  error: any;
};

type postsStatusType = {
  initial: (initialData?: PostType[] | null) => GetPostsStateType;
  loading: (prevState?: PostType[] | null) => GetPostsStateType;
  success: (payload: PostType[]) => GetPostsStateType;
  error: (error?: any) => GetPostsStateType;
};

export const getInitialPosts = createAsyncThunk(
  'posts/getInitialPosts',
  async () => {
    const posts: PostType[] = await getPosts();
    return posts;
  }
);

export const getInitialPostsById = createAsyncThunk(
  'posts/getInitialPostsById',
  async (id: number) => {
    const postById: PostType | undefined = await getPostById(id);
    return postById;
  }
);

export const postsStatus: postsStatusType = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload: PostType[]) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error: any) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsStatus.initial(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialPosts.pending, (state, action) => {
      //   state.loading = true;
      state = postsStatus.loading();

      // 중요~! state = 으로 상태관리하면 좀 안좋다
      // 보니까 state = postsStatus.loading()하면 컴포넌트까지 바뀐 상황이 전달이 안되는 것 같다

      // 되도록 state의 세부적인 곳까지 바꿔 주는게 좋은듯
      // state.loading = true 하니까 된다
    });
    builder.addCase(getInitialPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getInitialPosts.rejected, (state, action) => {
      console.log(state);
      console.log(action.payload);
    });
    builder.addCase(getInitialPostsById.fulfilled, (state, action) => {
      console.log(state);
      console.log(action.payload);
    });
  },
});

export const postsReducer = postsSlice.reducer;

export const postsActions = postsSlice.actions;
