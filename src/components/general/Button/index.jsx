import React from "react";
import "./style.scss";

const Button = ({ type, showModal, children }) => {
  const buttonType = type === "inactive" ? "button-inactive" : "button-active";

  return (
    <button
      type="button"
      onClick={showModal}
      className={`button ${buttonType}`}
    >
      {children}
    </button>
  );
};

export default Button;
