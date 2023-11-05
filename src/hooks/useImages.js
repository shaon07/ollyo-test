import { useDispatch, useSelector } from "react-redux";
import {
  addNewImage,
  deleteAllSelectedImage,
  toggleSelectImages,
  updateImageList,
} from "../redux/slices/imageSlice";

export default function useImages() {
  const dispatch = useDispatch();
  const { images, selectImages } = useSelector((state) => state.imageSlice);

  const handleDeleteSelectImages = () => {
    dispatch(deleteAllSelectedImage());
  };

  const handleToggleSelectedImages = (imageID) => {
    dispatch(toggleSelectImages(imageID));
  };

  const handleAddNewImage = (image) => {
    dispatch(addNewImage(image));
  }

  const handleUpdateImageList = (updatedImageList) => {
    dispatch(updateImageList(updatedImageList));
  }

  return {
    images,
    selectImages,
    handleDeleteSelectImages,
    handleToggleSelectedImages,
    handleAddNewImage,
    handleUpdateImageList
  };
}
