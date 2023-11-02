import { configureStore } from '@reduxjs/toolkit';
import imageSlice from "../src/redux/slices/imageSlice";


export const store = configureStore({
  reducer: {
    imageSlice,
  },
})




