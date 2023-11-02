import React, { useEffect, useState } from "react";

import { Checkbox } from "antd";
import useImages from "../../hooks/useImages";
import { styles } from "./index.css";

export default function ImageBox({ className = "", img }) {
  const {handleToggleSelectedImages} = useImages();
  const [showCheckBox, setShowCheckBox] = useState(false);

  useEffect(() => {
    setShowCheckBox(img.checked);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);


  return (
    <div
      className={`${styles.imageBoxWrapper} ${className}`}
      onMouseEnter={() => setShowCheckBox(true)}
      onMouseLeave={() => {
        if (!img.checked) setShowCheckBox(false);
      }}
      onClick={() => {
        handleToggleSelectedImages({...img, checked: !img.checked});
      }}
    >
      {showCheckBox && (
        <div className={`${styles.checkboxWrapper}`}>
          <Checkbox
            checked={img.checked}
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
