import React, { Component } from "react";
// --- Begin Navs ---
import Nav from "../nav";
import Logo from "../nav/components/Logo";
import LinksHorizontal from "../nav/components/LinksHorizontal";
import LinksVertical from "../nav/components/LinksVertical";
import Button from "../general/Button";
// --- End Navs ---
// --- Begin Content ---
import Content from "../content";
// --- End Content ---
import "./app.scss";
export class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Logo></Logo>
          <LinksHorizontal></LinksHorizontal>
          <Button>Premium</Button>
        </Nav>
        <div className="main">
          <Nav>
            <LinksVertical></LinksVertical>
          </Nav>
          <Content></Content>
        </div>
      </div>
    );
  }
}

export default App;
