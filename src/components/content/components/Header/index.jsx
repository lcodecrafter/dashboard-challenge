import React from "react";
import Title from "./components/Title";
import ProgressBar from "./components/ProgressBar";
import "./header.scss";

//TODO expect props.data which contain the progressNumber
const Header = props => {
  return (
    <div className="header-container">
      <Title text="Data overview"></Title>
      <ProgressBar total="800" progress="643"></ProgressBar>
    </div>
  );
};

export default Header;
