import React from "react";
import { Link } from "react-router-dom";
import "./linksHorizontal.scss";

const LinksHorizontal = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">Overview</Link>
      </li>
      <li className="nav-item">
        <Link to="/campaigns">Campaigns</Link>
      </li>
      <li className="nav-item">
        <Link to="/analytics">Analytics</Link>
      </li>
    </ul>
  );
};

export default LinksHorizontal;
