/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
// --- Begin Navs ---
import Nav from "@/components/nav";
import Logo from "@/components/nav/components/Logo";
import LinksHorizontal from "@/components/nav/components/LinksHorizontal";
import LinksVertical from "@/components/nav/components/LinksVertical";
import Button from "@/components/general/Button";
import Modal from "@/components/general/Modal";
import PremiumFeatures from "@/components/nav/components/PremiumFeatures";
// --- End Navs ---
// --- Begin Content ---
import Content from "@/components/content";

const Home = () => {
  const [modalPremiumVisibility, setMPVisibility] = useState(false);

  // status>boolean
  const manageModalVisibility = () => {
    setMPVisibility(!modalPremiumVisibility);
  };

  return (
    <div>
      <Nav>
        <Logo />
        <LinksHorizontal />
        <Button showModal={manageModalVisibility}>Premium</Button>
        {modalPremiumVisibility ? (
          <Modal showModal={manageModalVisibility}>
            <PremiumFeatures />
          </Modal>
        ) : null}
      </Nav>
      <div className="main">
        <Nav>
          <LinksVertical />
        </Nav>
        <Content />
      </div>
    </div>
  );
};

export default Home;
