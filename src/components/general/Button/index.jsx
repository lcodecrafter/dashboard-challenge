import React from "react";
import "./style.scss";

const Button = props => {
  const buttonType =
    props.type === "inactive" ? "button-inactive" : "button-active";

  return (
    <button onClick={props.showModal} className={"button " + buttonType}>
      {props.children}
    </button>
  );
};

export default Button;
