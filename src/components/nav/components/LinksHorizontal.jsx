import React from "react";
import { NavLink } from "react-router-dom";
import "./linksHorizontal.scss";

const LinksHorizontal = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <NavLink to="/" exact activeClassName="item-active">
          Overview
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/campaigns" activeClassName="item-active">
          Campaigns
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/analytics" activeClassName="item-active">
          Analytics
        </NavLink>
      </li>
    </ul>
  );
};

export default LinksHorizontal;
