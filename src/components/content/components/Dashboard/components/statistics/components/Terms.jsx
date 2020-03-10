import React from "react";
import "./terms.scss";

// props:{terms:{[term:string] : value:string}}
const Terms = ({ terms }) => {
  const termsKeys = Object.keys(terms);
  const termsValues = Object.values(terms);

  return (
    <div className="terms-container">
      <div className="terms-keys">
        {termsKeys.map((tk, index) => (
          <div key={tk + termsValues[index]}>
            {tk.slice(0, tk.length - 1)}
            &nbsp;
            {tk.slice(-1)}
          </div>
        ))}
      </div>
      <div className="terms-values">
        {termsValues.map((tv, index) => (
          <div key={tv + termsKeys[index]}>{tv}</div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
