import React from "react";
import "./pageNumber.scss";

// props {elementsPerPage:number; totalElements:number;}
const PageNumber = ({ elementsPerPage, totalElements }) => {
  return (
    <div className="base-container item-start pageNumber">
      <p>
        Showing&nbsp;
        <span className="black bold">1</span>
        &nbsp;to&nbsp;
        <span className="black bold">{elementsPerPage}</span>
        &nbsp;of&nbsp;
        <span className="bold">{`${totalElements} elements`}</span>
      </p>
    </div>
  );
};

export default PageNumber;
