import { useDispatch, useSelector } from "react-redux";
import { addSelectImages, removeSelectImages } from "../redux/slices/imageSlice";

export default function useImages() {
  const dispatch = useDispatch();
  const {images, selectImages} = useSelector((state) => state.imageSlice);

  const handleAddSelectImages = (imageID) => {
    dispatch(addSelectImages(imageID))
  }

  const handleRemoveSelectImages = (imageID) => {
    dispatch(removeSelectImages(imageID))
  }

  return {images, selectImages, handleAddSelectImages, handleRemoveSelectImages}
}
