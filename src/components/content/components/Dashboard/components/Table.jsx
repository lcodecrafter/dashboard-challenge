import React from "react";
import Button from "@/components/general/Button";
import "./table.scss";

// props:{[parentCols:string]:string|number[], [rows:string]:string|number[]}
const Table = ({ data }) => {
  // parentRows:string[]
  const generateParentRows = parentRows => {
    return parentRows.map(c => (
      <div className="parentRow" key={`${c}parent`}>
        {c.toUpperCase()}
      </div>
    ));
  };

  // childRows:{[property:string]: string | number}[]
  const generateChildRows = childRows => {
    const childRowsArr = childRows
      .map(objCol => {
        const newObject = { ...objCol };
        // translate the status property to an accepted type for the buttton component
        const statusToType =
          newObject.status.toLowerCase() === "sent" ? "active" : "inactive";
        // Assign the component to the status property
        newObject.status = (
          <Button type={statusToType}>{newObject.status}</Button>
        );
        // return an array with all the properties values
        return Object.values(newObject);
      })
      .flat();
    return childRowsArr.map((c, index) => (
      // index is needed because there is a string per element in the array and no way to difference between them
      // eslint-disable-next-line react/no-array-index-key
      <div className="childRow" key={c + index}>
        {c}
      </div>
    ));
  };

  return (
    <div className="table">
      {generateParentRows(data.parentCols)}
      {generateChildRows(data.rows)}
    </div>
  );
};

export default Table;
