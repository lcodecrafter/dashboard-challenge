import React, { Component } from "react";
import Nav from "./components/nav";
import Logo from "./components/nav/components/Logo";
import LinksHorizontal from "./components/nav/components/LinksHorizontal";
import Button from "./components/general/Button";

export class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Logo></Logo>
          <LinksHorizontal></LinksHorizontal>
          <Button>Premium</Button>
        </Nav>
      </div>
    );
  }
}

export default App;
