import React from "react";
import Title from "./components/Title";
import ProgressBar from "./components/ProgressBar";
import "./header.scss";

// TODO expect props.data which contain the progressNumber
const Header = () => {
  return (
    <div className="header-container">
      <Title text="Data overview" />
      <ProgressBar total="800" progress="643" />
    </div>
  );
};

export default Header;
