import React from "react";
import Table from "./components/Table";
import "./dashboard.scss";

const Dashboard = props => {
  //todo inner dashboard container divs will be 2 components
  return (
    <div className="dashboard-container">
      <div className="row1"></div>
      <div className="row2">
        <h3>Support Request</h3>
        <Table></Table>
      </div>
    </div>
  );
};

export default Dashboard;
