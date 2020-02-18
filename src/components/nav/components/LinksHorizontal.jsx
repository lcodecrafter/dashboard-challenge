import React from "react";
import "./linksHorizontal.scss";

const LinksHorizontal = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <a href="/">Overview</a>
      </li>
      <li className="nav-item">
        <a href="/contact">Campaigns</a>
      </li>
      <li className="nav-item">
        <a href="/">Analytics</a>
      </li>
    </ul>
  );
};

export default LinksHorizontal;
