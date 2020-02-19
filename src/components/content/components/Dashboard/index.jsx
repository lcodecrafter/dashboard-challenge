import React from "react";
import "./dashboard.scss";

const Dashboard = props => {
    //todo inner dashboard container divs will be 2 components
  return (
    <div className="dashboard-container">
      <div className="dashboard-statistics"></div>
      <div className="dashboard-table"></div>
    </div>
  );
};

export default Dashboard;
