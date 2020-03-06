import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./modal.scss";

const Modal = props => {
  return (
    <div onClick={props.showModal} className="modal-wrapper">
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className="modal"
      >
        <div onClick={props.showModal} className="cross">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
