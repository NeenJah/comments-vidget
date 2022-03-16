import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: `comments`,
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (state, action) => {
      [...state.comments, action.payload];
    },

    delComment: (state, action) => {
      state.comments.filter(comment => comment.id !== action.payload);
    },
  },
});

export const { addComment, delComment } = commentsSlice.actions;
export default commentsSlice.reducer;