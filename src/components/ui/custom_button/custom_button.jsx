import React from "react";
import styles from "./custom_button.module.scss";

const CustomButton = ({ children, disabled, type }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.CustomButton}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
