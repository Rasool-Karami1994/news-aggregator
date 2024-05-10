import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filtersList",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (
        action.payload.selectedValue === "none" ||
        action.payload.selectedValue === ""
      ) {
        const deletedOne = state.filter(
          (item) => item.key === action.payload.key
        );
        if (deletedOne?.length != 0) {
          let index = state.indexOf(deletedOne[0]);
          state = state.splice(index, 1);
        }
      }
      const duplicate = state.filter((item) => item.key === action.payload.key);
      if (duplicate?.length == 0 && action.payload.selectedValue !== "none") {
        state = state.push(action.payload);
      } else {
        let index = state.indexOf(duplicate[0]);
        if (index !== -1) {
          state[index] = action.payload;
        }
      }
    },
  },
});

export const { addFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
