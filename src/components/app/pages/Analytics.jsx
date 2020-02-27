import React from "react";
import Nav from "@/components/nav";
import Logo from "@/components/nav/components/Logo";
import LinksHorizontal from "@/components/nav/components/LinksHorizontal";
import LinksVertical from "@/components/nav/components/LinksVertical";
import Button from "@/components/general/Button";

const Analytics = () => {
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
        <div>
          <h1>Analytics</h1>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
