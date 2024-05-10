import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feedData",
  initialState: [],
  reducers: {
    addClientChoiceToFeedList: (state, action) => {
      const forRemove = state.filter(
        (item) => item.urlName === action.payload.urlName
      );

      if (forRemove?.length != 0) {
        let index = state.indexOf(forRemove[0]);
        state = state.splice(index, 1);
      } else {
        state = state.push(action.payload);
      }
    },
  },
});

export const { addClientChoiceToFeedList } = feedSlice.actions;
export default feedSlice.reducer;
