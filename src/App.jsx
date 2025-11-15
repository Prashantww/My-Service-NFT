import React from "react";
import HeroButton from "./components/HeroButton";
import ProfileCard from "./components/ProfileCard";
import CountdownTimer from "./components/CountdownTimer";

const App = () => {
  return (
    <div className="pageWrapper">
      <div className="bgGradientBlob blob1"></div>
      <div className="bgGradientBlob blob2"></div>
      <div className="profileAndCountdown flex w-[86vw] justify-between">
        <ProfileCard
          userImage={"/dummyProfile.png"}
          userName={"Emerson Philips"}
          units={3.2}
        ></ProfileCard>
        <CountdownTimer
          timerValue={"02:10:52:37"}
          timerLable={"Ticket Sales Close In"}
        ></CountdownTimer>
      </div>
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
      <img className="clockImage" src="/clockImage.png" alt="" />
      <div className="profileAndCountdownMobile">
        <ProfileCard
          userImage={"/dummyProfile.png"}
          userName={"Emerson Philips"}
          units={3.2}
        ></ProfileCard>
        <CountdownTimer
          timerValue={"02:10:52:37"}
          timerLable={"Ticket Sales Close In"}
        ></CountdownTimer>
      </div>
    </div>
  );
};

export default App;
