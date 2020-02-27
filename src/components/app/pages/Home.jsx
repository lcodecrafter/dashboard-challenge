import React from "react";
// --- Begin Navs ---
import Nav from "@/components/nav";
import Logo from "@/components/nav/components/Logo";
import LinksHorizontal from "@/components/nav/components/LinksHorizontal";
import LinksVertical from "@/components/nav/components/LinksVertical";
import Button from "@/components/general/Button";
// --- End Navs ---
// --- Begin Content ---
import Content from "@/components/content";
const Home = () => {
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
};

export default Home;
