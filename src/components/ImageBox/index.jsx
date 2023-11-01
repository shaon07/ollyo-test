import React, { useEffect, useState } from "react";

import { Checkbox } from "antd";
import { styles } from "./index.css";

export default function ImageBox({ className = "", img }) {
  const [checked, setChecked] = useState(false);
  const [showCheckBox, setShowCheckBox] = useState(false);

  useEffect(() => {
    setShowCheckBox(checked);
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
        src={require(`../../images/image-${img}.webp`)}
        alt="img"
        width={200}
        height={200}
        className={`${styles.image}`}
      />
    </div>
  );
}
