import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGauardianNews, getNewsApiNews } from "../../api/newsAPI";

export const getInitialCardsListData = createAsyncThunk(
  "getCardsList",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getGauardianNews({ payload });

      const secondRes = await getNewsApiNews({
        payload,
      });

      // const thirdRes = await getGoogleApiNews({ category: "Tesla" });
      // console.log(secondRes?.data?.articles);

      const transformData = (arr1, arr2) => {
        const combinedArr = arr1.concat(arr2);
        return combinedArr.map((obj) => {
          const {
            title,
            webTitle,
            url,
            webUrl,
            publishedAt,
            urlToImage,
            webPublicationDate,
            sectionName,
          } = obj;
          const date = webPublicationDate
            ? new Date(webPublicationDate).toLocaleDateString()
            : new Date(publishedAt).toLocaleDateString();
          const source = obj.pillarName ?? obj.source.name;
          const section = sectionName ?? "";
          const name = webTitle ?? title;
          const urlName = webUrl ?? url;
          return {
            name,
            date,
            source,
            urlName,
            imageUrl: urlToImage || null,
            section,
          };
        });
      };
      const makedData = transformData(
        secondRes?.data?.articles,
        response?.data?.response?.results
      );
      return makedData;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const cardsListSlice = createSlice({
  name: "cardsList",
  initialState: { loading: false, error: "", data: [] },
  extraReducers: {
    [getInitialCardsListData.pending]: (state) => {
      (state.loading = true), (state.error = ""), (state.data = []);
    },
    [getInitialCardsListData.fulfilled]: (state, action) => {
      (state.loading = false), (state.data = action.payload);
    },
    [getInitialCardsListData.error]: (state, action) => {
      (state.loading = false),
        (state.error = action.payload),
        (state.data = []);
    },
  },
});
export default cardsListSlice.reducer;
