import React from "react";
import ChartCircle from "./components/ChartCircle";
import Terms from "./components/Terms";
import "./statistics.scss";

//props:{graph:{}, terms:{}}
const Statistics = props => {
  const initChartData = {
    followersCount: "0",
    bars: {}
  };

  const initTermsData = {};

  return (
    <div className="stats-container">
      <div className="boxType1">
        <ChartCircle
          type="general"
          title="General Results"
          graph={
            props.graph.general ? props.graph.general.graph : initChartData
          }
        ></ChartCircle>
      </div>
      <div className="boxType1">
        <ChartCircle
          type="ratings"
          title="Ratings by category"
          graph={
            props.graph.ratings ? props.graph.ratings.graph : initChartData
          }
        ></ChartCircle>
      </div>
      <div className="boxType2">
        <Terms terms={props.terms ? props.terms : initTermsData}></Terms>
      </div>
    </div>
  );
};

export default Statistics;
