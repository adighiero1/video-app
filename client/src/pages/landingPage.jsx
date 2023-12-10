import React from "react";
import LandingPageNavigation from "../components/navigation/sideDrawerNav";
import NavAppbar from "../components/navigation/appbar";

const LandingPage = () => {
  return (
    <>
      <NavAppbar />
      <LandingPageNavigation />
    </>
  );
};

export default LandingPage;
