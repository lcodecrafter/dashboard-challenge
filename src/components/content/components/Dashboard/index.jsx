import React, { useState, useEffect } from "react";
import axios from "axios";
import endpointConf from "@/endpoint.json";
import Table from "./components/Table";
import Statistics from "./components/statistics";
import "./dashboard.scss";

const Dashboard = () => {
  const [tableData, setTableData] = useState({ parentCols: [], rows: [] });
  const [graphData, setGraphData] = useState({});
  const [termsData, setTermsData] = useState({});

  useEffect(() => {
    const getTableData = axios.get(`${endpointConf.devHost}/table`);
    const getGraphData = axios.get(`${endpointConf.devHost}/graph`);
    const getTermsData = axios.get(`${endpointConf.devHost}/terms`);

    axios.all([getTableData, getGraphData, getTermsData]).then(
      axios.spread((table, graph, terms) => {
        setTableData(table.data);
        setGraphData(graph.data);
        setTermsData(terms.data);
      })
    );
  }, []); // this means it is only executed when the component is mounted first time

  return (
    <div className="dashboard-container">
      <div className="row1">
        <Statistics graph={graphData} terms={termsData} />
      </div>
      <div className="row2">
        <h3>Support Request</h3>
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default Dashboard;
