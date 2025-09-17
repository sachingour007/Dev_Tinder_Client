import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      const newFeed = state.filter((el) => el._id !== action.payload);
      return newFeed;
    },
    cleanFeed: () => {
      return null
    }
  },
});

export const { addFeed, removeFeed, cleanFeed } = feedSlice.actions;
export default feedSlice.reducer;
