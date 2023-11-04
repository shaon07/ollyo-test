import { createSlice } from "@reduxjs/toolkit";
const images = [
  {
    id: 1,
    url: require("../../images/image-1.webp"),
    checked: false,
  },
  {
    id: 2,
    url: require("../../images/image-2.webp"),
    checked: false,
  },
  {
    id: 3,
    url: require("../../images/image-3.webp"),
    checked: false,
  },
  {
    id: 4,
    url: require("../../images/image-4.webp"),
    checked: false,
  },
  {
    id: 5,
    url: require("../../images/image-5.webp"),
    checked: false,
  },
  {
    id: 6,
    url: require("../../images/image-6.webp"),
    checked: false,
  },
  {
    id: 7,
    url: require("../../images/image-7.webp"),
    checked: false,
  },
  {
    id: 8,
    url: require("../../images/image-8.webp"),
    checked: false,
  },
  {
    id: 9,
    url: require("../../images/image-9.webp"),
    checked: false,
  },
  {
    id: 10,
    url: require("../../images/image-10.webp"),
    checked: false,
  },
  {
    id: 11,
    url: require("../../images/image-11.webp"),
    checked: false,
  },
];

const initialState = {
  images,
  selectImages: [],
};

export const imageSlice = createSlice({
  name: "imageSlice",
  initialState,
  reducers: {
    addSelectImages: (state, action) => {
      state.selectImages = [...state.selectImages, action.payload];
    },
    removeSelectImages: (state, action) => {
      state.selectImages = state.selectImages.filter(
        (image) => image !== action.payload
      );
    },
    deleteAllSelectedImage: (state) => {
      const newList = state.images.filter((img) => img.checked !== true);
      state.images = newList;
      state.selectImages = [];
    },
    toggleSelectImages: (state, action) => {
      const updatedArray = state.images.map(item => {
        if (item.id === action.payload) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      state.images = updatedArray;
      state.selectImages = state.images.filter((img) => img.checked === true);
    },
    addNewImage: (state, action) => {
      state.images = [...state.images, action.payload];
    },
    updateImageList: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const {
  addSelectImages,
  removeSelectImages,
  deleteAllSelectedImage,
  toggleSelectImages,
  addNewImage,
  updateImageList
} = imageSlice.actions;

export default imageSlice.reducer;
