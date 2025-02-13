import { createSlice } from "@reduxjs/toolkit";
import { getAllCompanies, getCompany } from "./operations";

import INITIAL_STATE from "./initialState";

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const slice = createSlice({
  name: "companies",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(getAllCompanies.pending, handlePending)
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllCompanies.rejected, handleRejected),
});

export default slice.reducer;
