import React from "react";
import "./progressBar.scss";

const VisualProgress = ({ progress }) => {
  // TODO generate the styles in the scss with a loop and purge the unsused ones with the webpack plugin purgecss: https://purgecss.com/plugins/webpack.html#usage
  const style = { width: `${progress}%` };
  return (
    <div className="visual-container">
      <div className="progress" style={style} />
    </div>
  );
};
// props {total:number;progress:number}
const ProgressBar = ({ total, progress }) => {
  // return a number from 0-100
  const progressPercentage = (t, p) => {
    // get the percentage to style the bar
    return t <= 100 ? p : Math.round((p * 100) / t);
  };

  return (
    <div className="base-container item-end progressBar">
      <VisualProgress progress={progressPercentage(total, progress)} />
      <p>
        <span>{progress}</span>
        &nbsp;insertions needed to complete
      </p>
    </div>
  );
};

export default ProgressBar;
