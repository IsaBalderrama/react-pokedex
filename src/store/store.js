/* eslint-disable */ 
import { configureStore } from '@reduxjs/toolkit';
import { regionSlice } from './slices/region/regionSlice';

export const store = configureStore({
  reducer: {
    region: regionSlice.reducer,
  },
})