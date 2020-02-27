import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faComments,
  faFolder,
  faEnvelope,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./linksVertical.scss";

const LinksVertical = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">
          <FontAwesomeIcon icon={faTachometerAlt} />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <FontAwesomeIcon icon={faComments} />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <FontAwesomeIcon icon={faFolder} />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <FontAwesomeIcon icon={faCog} />
        </Link>
      </li>
    </ul>
  );
};

export default LinksVertical;
