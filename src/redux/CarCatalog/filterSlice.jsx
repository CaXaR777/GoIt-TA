import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "productFilter",
  initialState: {
    location: "",
    equipment: [],
    vehicleType: "",
  },
  reducers: {
    changeFilter: {
      prepare({ location, equipment, vehicleType }) {
        return {
          payload: {
            location,
            equipment,
            vehicleType: vehicleType === "all" ? "" : vehicleType,
          },
        };
      },
      reducer(state, { payload }) {
        state.location = payload.location;
        state.equipment = payload.equipment;
        state.vehicleType = payload.vehicleType;
      },
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;
