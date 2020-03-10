import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Pagination from "./components/Pagination";
import "./content.scss";

const Content = () => {
  return (
    <section className="main-content">
      <Header />
      <Dashboard />
      <Pagination />
    </section>
  );
};

export default Content;
