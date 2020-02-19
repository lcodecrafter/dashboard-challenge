import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Pagination from "./components/Pagination";
import "./content.scss";

const Content = props => {
  return (
    <section className="main-content">
      <Header></Header>
      <Dashboard></Dashboard>
      <Pagination></Pagination>
    </section>
  );
};

export default Content;
