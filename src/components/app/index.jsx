import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages";
// --- End Content ---
import "./app.scss";
export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/campaigns">
            <Pages.Campaigns />
          </Route>
          <Route path="/analytics">
            <Pages.Analytics />
          </Route>
          <Route exact path="/">
            <Pages.Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
