import { useDispatch, useSelector } from "react-redux";
import {
  addSelectImages,
  deleteAllSelectedImage,
  removeSelectImages,
  toggleSelectImages,
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

  return {
    images,
    selectImages,
    handleAddSelectImages,
    handleRemoveSelectImages,
    handleDeleteSelectImages,
    handleToggleSelectedImages,
  };
}
