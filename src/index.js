import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.scss";

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  // enables hot module replacement if plugin is installed
  console.log("HOT RELOAD ENABLED");
  module.hot.accept();
}
