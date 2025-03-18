import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const tokenManager = response.user.auth.currentUser.stsTokenManager;

      return {
        name: credentials.name,
        email: credentials.email,
        token: tokenManager.accessToken,
      };
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const tokenManager = response.user.auth.currentUser.stsTokenManager;

      return {
        name: credentials.name,
        email: credentials.email,
        token: tokenManager.accessToken,
      };
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await signOut(auth);

    console.log(response);
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
