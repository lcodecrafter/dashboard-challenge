import React, { useRef, useEffect } from "react";
import {
  generateGraphBars,
  generateGraphLettters,
  canvasHandler
} from "./utils";
import "./chartCircle.scss";

//Depending of the project requirements, I would divide this component in 2 components more to be able to show them separatly. In this case I assume that these graphics will be always shown together
// props:{title:string; grap:{followersCount:string; bars:{[key:string]:number}}}
const ChartCircle = props => {
  const circleContainer = useRef(null); //defining the ref to access to the canvas

  useEffect(() => {
    if (props.type === "general") {
      canvasHandler(circleContainer.current, "#b3d6ff", "#0077ff");
    } else {
      canvasHandler(circleContainer.current, "#fab9d3", "#f0156d");
    }
  });

  const classType = props.type === "general" ? "chartGeneral" : "chartRatings";

  return (
    <div className="charCircle-container">
      <h4 className="title">{props.title}</h4>
      <div className="graphics">
        <div className="followers-bars">
          <div className="followers-count">
            <h2>{props.graph.followersCount}</h2>&nbsp;&nbsp;Followers
          </div>
          <div className="followers-graph-container">
            <div className={"followers-graph " + classType}>
              {generateGraphBars(Object.values(props.graph.bars))}
              {generateGraphLettters(Object.keys(props.graph.bars))}
            </div>
          </div>
        </div>
        <div
          data-percent="65"
          ref={circleContainer}
          className="followers-circle"
        ></div>
      </div>
    </div>
  );
};

export default ChartCircle;
