import React from "react";
import "./progressBar.scss";

const VisualProgress = props => {
  // TODO generate the styles in the scss with a loop and purge the unsused ones with the webpack plugin purgecss: https://purgecss.com/plugins/webpack.html#usage
  const style = { width: props.progress + "%" };
  return (
    <div className="visual-container">
      <div className="progress" style={style}></div>
    </div>
  );
};
//props {total:number;progress:number}
const ProgressBar = ({ total, progress }) => {
  // return a number from 0-100
  const progressPercentage = (total, progress) => {
    if (total <= 100) {
      return progress;
    }
    //get the percentage to style the bar
    return Math.round((progress * 100) / total);
  };

  return (
    <div className="base-container item-end progressBar">
      <VisualProgress
        progress={progressPercentage(total, progress)}
      ></VisualProgress>
      <p>
        <span>{progress}</span> insertions needed to complete
      </p>
    </div>
  );
};

export default ProgressBar;
