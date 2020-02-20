import React from "react";
import Table from "./components/Table";
import Statistics from "./components/statistics";
import "./dashboard.scss";

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <div className="row1">
        <Statistics></Statistics>
      </div>
      <div className="row2">
        <h3>Support Request</h3>
        <Table></Table>
      </div>
    </div>
  );
};

export default Dashboard;
