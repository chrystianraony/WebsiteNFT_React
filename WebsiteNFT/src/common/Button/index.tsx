import React from "react";
import "./button.css";

export const Button = (props) => {
  const { btnType, btnText, btnOnClick, customClass } = props;

  return (
    <div
      className={`${
        btnType === "PRIMARY"
          ? `button primary-btn ${customClass}`
          : `button secondary-btn ${customClass}`
      }`}
      onClick={btnOnClick}
    >
      {btnText}
    </div>
  );
};
