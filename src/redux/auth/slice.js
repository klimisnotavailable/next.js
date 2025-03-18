import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";
import { INITIAL_STATE } from "./initialState";

const slice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.accessToken = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);
        console.log(action.payload);
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.accessToken = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action);
        state.error = action.error;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user.email = null;
        state.user.name = null;
        state.accessToken = null;
        state.isLoggedIn = false;
      }),
  reducers: {
    refresh: (state, action) => {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
    },
  },
});

export default slice.reducer;
