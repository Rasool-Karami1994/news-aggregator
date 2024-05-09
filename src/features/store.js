import { configureStore } from "@reduxjs/toolkit";
import cardsListSlice from "./cardsList/cardsListSlice";
import filtersSlice from "./filters/filtersSlice";

const store = configureStore({
  reducer: {
    cardsList: cardsListSlice,
    filters: filtersSlice,
  },
});
export default store;
