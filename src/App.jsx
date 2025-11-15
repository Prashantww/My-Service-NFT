import React from "react";
import HeroButton from "./components/HeroButton";
import ProfileCard from "./components/ProfileCard";
import CountdownTimer from "./components/CountdownTimer";
import ProgressBar from "./components/ProgressBar";
import ServiceCard from "./components/ServiceCard";
import Agreement from "./components/Agreement";

const App = () => {
  // ----Service Card Info----

  const serviceData = [
    {
      imageUrl: "/serviceCards/Professional&Web3Services.png",
      title: "Professional & Web3 Services",
      subTitle: "Lorem ipsum dolor sit amet, consectetur aboris",
    },
    {
      imageUrl: "/serviceCards/DR_AIDAN_WELLNECY.png",
      title: "DR_AIDAN_WELLNECY",
      subTitle: "Lorem ipsum dolor sit amet, consectetur aboris",
    },
    {
      imageUrl: "/serviceCards/Personal&Domestic.png",
      title: "Personal & Domestic",
      subTitle: "Lorem ipsum dolor sit amet, consectetur aboris",
    },
  ];

  return (
    <div className="pageWrapper">
      <div className="bgGradientBlob blob1"></div>
      <div className="bgGradientBlob blob2"></div>
      <div className="profileAndCountdown flex w-[86vw] justify-between">
        {/* ----Profile Card (Desktop & Tab verison)---- */}
        <ProfileCard
          userImage={"/dummyProfile.png"}
          userName={"Emerson Philips"}
          units={3.2}
        ></ProfileCard>

        {/* ----Countdown Timer (Desktop & Tab verison)---- */}

        <CountdownTimer
          timerValue={"02:10:52:37"}
          timerLable={"Ticket Sales Close In"}
        ></CountdownTimer>
      </div>

      {/* ----Heading---- */}
      <h1>
        <span>Win 10 Years of</span> Exclusive Time & Service
      </h1>
      <p className="subHeading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>

      {/* ----Hero Buttons---- */}
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

      {/* ----Clock Image---- */}
      <img className="clockImage" src="/clockImage.png" alt="" />

      {/* ----Profile and Countdown (Mobile version)---- */}
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

      {/* ----Lottery Details Section---- */}
      <section className="lotteryDetails">
        <h2 className="mb-[12px]">Lottery Details</h2>
        <ProgressBar current={750} total={1000}></ProgressBar>
      </section>

      {/* ----Service Section---- */}
      <section className="serviceProviderProfile">
        <h2>Service Provider Profile</h2>

        <div className="serviceGrid mt-[40px]">
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              subtitle={item.subTitle}
              image={item.imageUrl}
            />
          ))}
          <div className="agreementWrapperMain">
            <Agreement
              documentName={"Master Service Agreement"}
              policyList={[
                "Schedule Limits Apply",
                "Non-Transferable",
                "Safety-First Policy",
              ]}
            ></Agreement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
