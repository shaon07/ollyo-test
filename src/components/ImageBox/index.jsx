import React, { useEffect, useState } from "react";

import { Checkbox } from "antd";
import useImages from "../../hooks/useImages";
import { styles } from "./index.css";

export default function ImageBox({ className = "", img }) {
  const {handleAddSelectImages,handleRemoveSelectImages} = useImages();
  const [checked, setChecked] = useState(false);
  const [showCheckBox, setShowCheckBox] = useState(false);

  useEffect(() => {
    setShowCheckBox(checked);

    if(checked){
      handleAddSelectImages(img.id)
    } else {
      handleRemoveSelectImages(img.id)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);


  return (
    <div
      className={`${styles.imageBoxWrapper} ${className}`}
      onMouseEnter={() => setShowCheckBox(true)}
      onMouseLeave={() => {
        if (!checked) setShowCheckBox(false);
      }}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {showCheckBox && (
        <div className={`${styles.checkboxWrapper}`}>
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            className="p-2"
          />
        </div>
      )}

      <img
        src={img.url}
        alt="img"
        width={200}
        height={200}
        className={`${styles.image}`}
      />
    </div>
  );
}
