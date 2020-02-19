import React from "react";
import "./title.scss";

const Title = props => {
  return (
    <div className="base-container item-start title">
      <h3>{props.text}</h3>
    </div>
  );
};

export default Title;
