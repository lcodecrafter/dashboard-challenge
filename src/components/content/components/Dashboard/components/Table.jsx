import React from "react";
import Button from "@/components/general/Button";
import "./table.scss";

// props:{[parentCols:string]:string|number[], [rows:string]:string|number[]}
const Table = props => {
  //parentRows:string[]
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
        let newObject = Object.assign({}, objCol);
        //translate the status property to an accepted type for the buttton component
        const statusToType =
          newObject.status.toLowerCase() === "sent" ? "active" : "inactive";
        //Assign the component to the status property
        newObject.status = (
          <Button type={statusToType}>{newObject.status}</Button>
        );
        //return an array with all the properties values
        return Object.values(newObject);
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
      {generateParentRows(props.data.parentCols)}
      {generateChildRows(props.data.rows)}
    </div>
  );
};

export default Table;
