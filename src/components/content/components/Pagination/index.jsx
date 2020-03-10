import React from "react";
import PageNumber from "./components/PageNumber";
import PageBoxes from "./components/PageBoxes";
import "./pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <PageNumber elementsPerPage={20} totalElements={25} />
      <PageBoxes currentPage={1} nextPage={2} />
    </div>
  );
};

export default Pagination;
