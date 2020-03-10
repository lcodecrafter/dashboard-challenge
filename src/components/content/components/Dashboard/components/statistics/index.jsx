import React from "react";
import ChartCircle from "./components/ChartCircle";
import Terms from "./components/Terms";
import "./statistics.scss";

// props:{graph:{}, terms:{}}
const Statistics = ({ graph, terms }) => {
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
          graph={graph.general ? graph.general.graph : initChartData}
        />
      </div>
      <div className="boxType1">
        <ChartCircle
          type="ratings"
          title="Ratings by category"
          graph={graph.ratings ? graph.ratings.graph : initChartData}
        />
      </div>
      <div className="boxType2">
        <Terms terms={terms || initTermsData} />
      </div>
    </div>
  );
};

export default Statistics;
