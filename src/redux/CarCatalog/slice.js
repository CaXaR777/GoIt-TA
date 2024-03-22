import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operations";

const initialState = {
  catalog: [],
  favorites: [],
  currentPage: 1,
  itemsPerPage: 4,
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog = action.payload;
        state.error = null;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
