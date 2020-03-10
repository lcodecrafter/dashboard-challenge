/* eslint-disable import/no-unresolved */
import React from "react";
import Nav from "@/components/nav";
import Logo from "@/components/nav/components/Logo";
import LinksHorizontal from "@/components/nav/components/LinksHorizontal";
import LinksVertical from "@/components/nav/components/LinksVertical";
import Button from "@/components/general/Button";

const Campaigns = () => {
  return (
    <div>
      <Nav>
        <Logo />
        <LinksHorizontal />
        <Button>Premium</Button>
      </Nav>
      <div className="main">
        <Nav>
          <LinksVertical />
        </Nav>
        <section className="main-content">
          <h1>Campaings!</h1>
        </section>
      </div>
    </div>
  );
};

export default Campaigns;
