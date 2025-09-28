import { configureStore } from '@reduxjs/toolkit';
import filter from './slises/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});
