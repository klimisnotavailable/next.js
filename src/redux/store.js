  import { configureStore } from '@reduxjs/toolkit';
  import companiesReducer from "./companies/slice";
  
  export const makeStore = configureStore({
    reducer:{
      companies: companiesReducer
    }
  })