import { useDispatch, useSelector } from "react-redux";
import {
  addNewImage,
  addSelectImages,
  deleteAllSelectedImage,
  removeSelectImages,
  toggleSelectImages,
  updateImageList,
} from "../redux/slices/imageSlice";

export default function useImages() {
  const dispatch = useDispatch();
  const { images, selectImages } = useSelector((state) => state.imageSlice);

  const handleAddSelectImages = (image) => {
    dispatch(addSelectImages(image));
  };

  const handleRemoveSelectImages = (image) => {
    dispatch(removeSelectImages(image));
  };

  const handleDeleteSelectImages = () => {
    dispatch(deleteAllSelectedImage());
  };

  const handleToggleSelectedImages = (image) => {
    dispatch(toggleSelectImages(image));
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
    handleAddSelectImages,
    handleRemoveSelectImages,
    handleDeleteSelectImages,
    handleToggleSelectedImages,
    handleAddNewImage,
    handleUpdateImageList
  };
}
