import React from "react";
import { generateImageUrl } from "../../helpers/generateImageUrl";
import useImages from "../../hooks/useImages";
import { styles } from "./index.css";

export default function AddImageBox() {
  const { images, handleAddNewImage } = useImages();

  const handleImageUpload = (file) => {
    const newImage = {
      id: images.length + 1,
      url: generateImageUrl(file),
      checked: false,
    };

    handleAddNewImage(newImage);
  };

  return (
    <div className={`${styles.addImageWrapper} relative`}>
      <div className={`${styles.textWrapper}`}>
        <img
          src={require("../../images/placeholder.jpg")}
          alt="placeholder"
          className="w-[20px] h-[20px]"
        />
        <span className={`${styles.title}`}>Add Image</span>
      </div>
      <input
        type="file"
        className="absolute top-0 right-0 left-0 bottom-0 opacity-0 cursor-pointer"
        onChange={(e) => handleImageUpload(e.target.files[0])}
      />
    </div>
  );
}
