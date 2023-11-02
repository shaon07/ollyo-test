import { createSlice } from '@reduxjs/toolkit';
const images = [
    {
      id: 1,
      url: require("../../images/image-1.webp"),
    },
    {
      id: 2,
      url: require("../../images/image-2.webp"),
    },
    {
      id: 3,
      url: require("../../images/image-3.webp"),
    },
    {
      id: 4,
      url: require("../../images/image-4.webp"),
    },
    {
      id: 5,
      url: require("../../images/image-5.webp"),
    },
    {
      id: 6,
      url: require("../../images/image-6.webp"),
    },
    {
      id: 7,
      url: require("../../images/image-7.webp"),
    },
    {
      id: 8,
      url: require("../../images/image-8.webp"),
    },
    {
      id: 9,
      url: require("../../images/image-9.webp"),
    },
    {
      id: 10,
      url: require("../../images/image-10.webp"),
    },
    {
      id: 11,
      url: require("../../images/image-11.webp"),
    },
  ];

const initialState = {
  images,
  selectImages: []
}

export const imageSlice = createSlice({
  name: 'imageSlice',
  initialState,
  reducers: {
    addSelectImages: (state, action) => {
      state.selectImages = [...state.selectImages, action.payload];
    },
    removeSelectImages: (state, action) => {
      state.selectImages = state.selectImages.filter(
        (image) => image !== action.payload
      )
    }
  },
})

export const { addSelectImages,removeSelectImages } = imageSlice.actions

export default imageSlice.reducer