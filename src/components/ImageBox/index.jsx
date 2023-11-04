import { Checkbox } from "antd";
import React, { forwardRef } from "react";
import { styles } from "./index.css";

export const ImageBox = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      zIndex: "1",
      ...style,
    };

    const isChecked = props.img.checked;

    return (
      <div
        ref={ref}
        style={inlineStyles}
        {...props}
        className={`${styles.imageBoxWrapper} ${isChecked ? "active":"normal"}`}
      >
        <div className={`${styles.checkboxWrapper} `}>
          <Checkbox checked={isChecked} className="p-2 checkbox" />
        </div>

        <img
          src={url}
          alt="img"
          width={200}
          height={200}
          className={`${styles.image}`}
        />
      </div>
    );
  }
);
