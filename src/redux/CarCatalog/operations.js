import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

axios.defaults.baseURL = "https://65fcb8159fc4425c6530a5ef.mockapi.io";

export const fetchCatalog = createAsyncThunk(
  "catalog/featchAllAdvert",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/advert`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
