import React from "react";
import Button from "@/components/general/Button";
import tableContent from "../fake-data/tableData.json";
import "./table.scss";

const Table = props => {
  //Data should come from props
  const data = tableContent;
  //parentRows:array
  const generateParentRows = parentRows => {
    return parentRows.map((c, index) => (
      <div className="parentRow" key={c + index}>
        {c.toUpperCase()}
      </div>
    ));
  };

  //childRows:{[property:string]: string | number}[]
  const generateChildRows = childRows => {
    const childRowsArr = childRows
      .map(objCol => {
        //translate the status property to an accepted type for the buttton component
        const statusToType =
          objCol.status.toLowerCase() === "sent" ? "active" : "inactive";
        //Assign the component to the status property
        objCol.status = <Button type={statusToType}>{objCol.status}</Button>;
        //return an array with all the properties values
        return Object.values(objCol);
      })
      .flat();

    return childRowsArr.map((c, index) => (
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
