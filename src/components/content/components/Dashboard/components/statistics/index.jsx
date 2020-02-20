import React from "react";
import ChartCircle from "./components/ChartCircle";
import graphData from "../../fake-data/graphData.json";
import "./statistics.scss";

const Statistics = props => {
  return (
    <div className="stats-container">
      <div className="boxType1">
        <ChartCircle
          type="general"
          title="General Results"
          graph={graphData.general.graph}
        ></ChartCircle>
      </div>
      <div className="boxType1">
        <ChartCircle
          type="ratings"
          title="Ratings by category"
          graph={graphData.ratings.graph}
        ></ChartCircle>
      </div>
      <div className="boxType2"></div>
    </div>
  );
};

export default Statistics;
