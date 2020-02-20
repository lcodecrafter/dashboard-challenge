import React from "react";
import "./chartCircle.scss";

//Depending of the project requirements, I would divide this component in 2 components more to be able to show them separatly. In this case I assume that these graphics will be always shown together
// props:{title:string; grap:{followersCount:string; bars:{[key:string]:number}}}
const ChartCircle = props => {
  const generateGraphBars = bars => {
    return bars.map((b, index) => (
      <div key={b + index + Math.random()} className="graph-bar">
        <div
          key={b + index + Math.random()}
          style={{ height: `${b}%` }}
          className="bar"
        ></div>
      </div>
    ));
  };

  const generateGraphLettters = letters => {
    return letters.map((l, index) => (
      <div key={l + index + Math.random()} className="graph-legend">
        {l}
      </div>
    ));
  };

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
        <div className="followers-circle"></div>
      </div>
    </div>
  );
};

export default ChartCircle;
