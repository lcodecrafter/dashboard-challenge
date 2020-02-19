import React from "react";
import "./pageNumber.scss";

// props {elementsPerPage:number; totalElements:number;}
const PageNumber = props => {
  return (
    <div className="base-container item-start pageNumber">
      <p>
        Showing <span className="black bold">1</span> to
        <span className="black bold"> {props.elementsPerPage}</span> of
        <span className="bold"> {props.totalElements} elements</span>
      </p>
    </div>
  );
};

export default PageNumber;
