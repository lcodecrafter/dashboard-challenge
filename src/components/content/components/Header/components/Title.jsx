import React from "react";
import "./title.scss";

const Title = ({ text }) => {
  return (
    <div className="base-container item-start title">
      <h3>{text}</h3>
    </div>
  );
};

export default Title;
