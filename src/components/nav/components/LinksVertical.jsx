import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faComments,
  faFolder,
  faEnvelope,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import "./linksVertical.scss";

const LinksVertical = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <a href="/">
          <FontAwesomeIcon icon={faTachometerAlt} />
        </a>
      </li>
      <li className="nav-item">
        <a href="/">
          <FontAwesomeIcon icon={faComments} />
        </a>
      </li>
      <li className="nav-item">
        <a href="/">
          <FontAwesomeIcon icon={faFolder} />
        </a>
      </li>
      <li className="nav-item">
        <a href="/">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li className="nav-item">
        <a href="/">
          <FontAwesomeIcon icon={faCog} />
        </a>
      </li>
    </ul>
  );
};

export default LinksVertical;
