import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export const initialState = {};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsState: (state, action: PayloadAction) => {
      return { ...state };
    },
  },
});

export const { setPostsState } = postsSlice.actions;

export default postsSlice.reducer;
