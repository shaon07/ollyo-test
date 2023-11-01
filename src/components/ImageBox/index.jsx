import React, { useEffect, useState } from "react";

import { Checkbox } from "antd";
// import testImage from ;
import { styles } from "./index.css";

export default function ImageBox({className ="", img}) {
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
        if(!checked) setShowCheckBox(false)
      }}
    >
      {showCheckBox && (
        <div
          className={`${styles.checkboxWrapper}`}
        >
          <Checkbox
            defaultChecked={checked}
            onChange={(e) => {
                setChecked(e.target.checked)
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
        className="cursor-pointer object-cover w-full h-full"
      />
    </div>
  );
}
