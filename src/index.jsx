import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./style.scss";

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
