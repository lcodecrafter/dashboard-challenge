import React from "react";
import Button from "@/components/general/Button";
import "./pageBoxes.scss";
// props {currentPage:number; nextPage:number;}
const PageBoxes = ({ currentPage, nextPage }) => {
  return (
    <div className="base-container item-end pageBox">
      <span>Page&nbsp;</span>
      <Button type="active">{currentPage}</Button>
      <span>&nbsp;...&nbsp;</span>
      <Button type="inactive">{nextPage}</Button>
    </div>
  );
};

export default PageBoxes;
