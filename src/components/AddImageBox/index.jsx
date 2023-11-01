import React from "react";
import { styles } from "./index.css";

export default function AddImageBox() {
  return (
    <div className={`${styles.addImageWrapper}`}>
      <div className={`${styles.textWrapper}`}>
      <img
        src={require("../../images/placeholder.jpg")}
        alt="placeholder"
        className="w-[20px] h-[20px]"
      />
      <span className={`${styles.title}`}>Add Image</span>
      </div>
    </div>
  );
}
