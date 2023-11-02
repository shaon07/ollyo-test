import { Checkbox } from "antd";
import React from "react";
import useImages from "../../hooks/useImages";
import { styles } from "./index.css";

export default function Header() {
  const { selectImages, handleDeleteSelectImages } = useImages();
  const selectedImageLen = selectImages.length;
  const isSelectedImage = selectedImageLen > 0 ? true : false;

  return (
    <div className={`${styles.headerWrapper}`}>
      <h2 className={`${styles.titleLeft}`}>
        {isSelectedImage && <Checkbox checked={true} />}
        <span>
          {isSelectedImage ? selectedImageLen : ""}{" "}
          {isSelectedImage ? "Files Selected" : "Gallery"}
        </span>
      </h2>
      {isSelectedImage && (
        <h4
          className={`${styles.titleRight}`}
          onClick={handleDeleteSelectImages}
        >
          Delete File{selectedImageLen > 1 ? "s" : ""}
        </h4>
      )}
    </div>
  );
}
