import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faComments,
  faFolder,
  faEnvelope,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./linksVertical.scss";

const LinksVertical = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <NavLink to="/" exact activeClassName="item-active">
          <FontAwesomeIcon icon={faTachometerAlt} />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/campaigns" activeClassName="item-active">
          <FontAwesomeIcon icon={faComments} />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/analytics" activeClassName="item-active">
          <FontAwesomeIcon icon={faFolder} />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/notset1">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/notset2">
          <FontAwesomeIcon icon={faCog} />
        </NavLink>
      </li>
    </ul>
  );
};

export default LinksVertical;
