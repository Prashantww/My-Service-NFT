import React from "react";
import HeroButton from "./components/HeroButton";

const App = () => {
  return (
    <>
      <div className="bgGradient"></div>
      <h1>
        <span>Win 10 Years of</span> Exclusive Time & Service
      </h1>
      <p className="subHeading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
      <div className="flex gap-[24px] mt-[27px]">
        <HeroButton toLink="#">Connect Wallet</HeroButton>
        <HeroButton toLink="#" variant="primary-right">
          Your Tickets
        </HeroButton>
      </div>
      <div className="mt-[24px]">
        <HeroButton toLink="#" variant="link">
          Buy Tickets
        </HeroButton>
      </div>
    </>
  );
};

export default App;
