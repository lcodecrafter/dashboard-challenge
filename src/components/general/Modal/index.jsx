import React from "react";
import "./modal.scss";

const Modal = () => {
  return <div className="modal">{props.children}</div>;
};

export default Modal;
