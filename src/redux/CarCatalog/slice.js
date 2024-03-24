import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operations";

const initialState = {
  catalog: [],
  favorites: [],
  bookings: [],
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
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    deleteBooking: (state, action) => {
      const bookingIdToDelete = action.payload;
      state.bookings = state.bookings.filter(
        (booking) => booking._id !== bookingIdToDelete
      );
    },
    addToFavorites: (state, action) => {
      const itemToAdd = action.payload;

      const existingItemIndex = state.favorites.findIndex(
        (item) => item._id === itemToAdd._id
      );

      if (existingItemIndex !== -1) {
        state.favorites.splice(existingItemIndex, 1);
      } else {
        state.favorites.push(itemToAdd);
      }
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
        // state.catalog = [...state.catalog, ...action.payload];
        state.error = null;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, addToFavorites, addBooking, deleteBooking } =
  catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
