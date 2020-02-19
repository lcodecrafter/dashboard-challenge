import React from "react";
import Button from "@/components/general/Button";
import "./pageBoxes.scss";
// props {currentPage:number; nextPage:number;}
const PageBoxes = props => {
  return (
    <div className="base-container item-end pageBox">
      <span>Page&nbsp;</span>
      <Button type="active">{props.currentPage}</Button>
      <span>&nbsp;...&nbsp;</span>
      <Button type="inactive">{props.nextPage}</Button>
    </div>
  );
};

export default PageBoxes;
