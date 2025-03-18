import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./companies/slice";
import authReducer from "./auth/slice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "user", "isLoggedIn"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const makeStore = configureStore({
  reducer: {
    companies: companiesReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(makeStore);

export default persistor;
