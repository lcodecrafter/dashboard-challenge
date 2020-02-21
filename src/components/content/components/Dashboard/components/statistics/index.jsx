import React from "react";
import ChartCircle from "./components/ChartCircle";
import Terms from "./components/Terms";
import graphData from "../../fake-data/graphData.json";
import terms from "../../fake-data/terms.json";
import "./statistics.scss";

//what comes from graphData should be passed as props as consequence of http request
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
      <div className="boxType2">
        <Terms terms={terms}></Terms>
      </div>
    </div>
  );
};

export default Statistics;
