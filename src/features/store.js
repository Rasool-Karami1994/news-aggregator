import { configureStore } from "@reduxjs/toolkit";
import cardsListSlice from "./cardsList/cardsListSlice";
import filtersSlice from "./filters/filtersSlice";
import feedSlice from "./feed/feedSlice";

const store = configureStore({
  reducer: {
    cardsList: cardsListSlice,
    filters: filtersSlice,
    feedList: feedSlice,
  },
});
export default store;
