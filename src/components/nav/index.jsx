import React from "react";
import "./nav.scss";

const Nav = ({ children }) => {
  // Get the name of the child component that "identify" what kind of nav we want to print such as horizontal nav or vertical nav.
  const getNavType = () => {
    // return an array with the components names we are interested in. It there should be one element.
    const navType = React.Children.map(children, child => {
      return child
        ? ["LinksHorizontal", "LinksVertical"].find(t => t === child.type.name)
        : undefined;
    });

    return navType.length !== 0 ? navType[0] : "";
  };

  const getNavTypeClass = navType => {
    // eslint-disable-next-line no-nested-ternary
    return !navType
      ? ""
      : navType === "LinksHorizontal"
      ? "nav-horizontal"
      : "nav-vertical";
  };

  const navClass = getNavTypeClass(getNavType());

  return <nav className={`nav ${navClass}`}>{children}</nav>;
};

export default Nav;
