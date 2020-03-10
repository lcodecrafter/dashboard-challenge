/* eslint-disable jsx-a11y/no-static-element-interactions */ // Disbled for bubbling prevention
/* eslint-disable jsx-a11y/click-events-have-key-events */ // Disable until: Todo improve the accessibility
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./modal.scss";

const Modal = ({ showModal, children }) => {
  return (
    <div onClick={showModal} className="modal-wrapper">
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className="modal"
      >
        <div onClick={showModal} className="cross">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
