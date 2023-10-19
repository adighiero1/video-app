import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const selectSearch = (state) => state.search;

export default searchSlice.reducer;
