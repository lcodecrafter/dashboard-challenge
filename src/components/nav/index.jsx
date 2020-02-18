import React from "react";
import "./nav.scss";

const Nav = props => {
  return <nav className="nav nav-horizontal">{props.children}</nav>;
};

export default Nav;
