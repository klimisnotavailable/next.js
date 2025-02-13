import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://679d0aa487618946e6543341.mockapi.io/crm/";

export const getAllCompanies = createAsyncThunk(
  "companies/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/companieslist");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCompany = createAsyncThunk(
  "companies/getCompany",
  async (id, thunkAPI) => {
    try {
      const company = await axios.get(`/companieslist/${id}`);
      return company;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCompany = createAsyncThunk(
  "companies/addCompany",
  async (company, thunkAPI) => {
    try {
      const response = await axios.post("/companieslist",company);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

