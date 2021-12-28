import React from "react";
import Title from "./Title";
import DateLoc from "./DateLoc";
import Intro from "./Intro";
import HomeRegister from "./HomeRegister";
import Speakers from "./speakers";

export default function Conference({ display }) {
  const sectionStyle = `section-background conference-bg-image bg-primary pt-[${
    display === "hidden" ? "54px" : "351px"
  }] pb-[171px] md:pt-[54px] md:pb-[214px]`;
  return (
    <section
      className={sectionStyle}
      style={{
        backgroundImage:
          "url(https://2012.buildconf.com/images/conf_bg@2x2.png)",
      }}
    >
      <div className="section-container">
        <Title />
        <DateLoc />
        <Intro />
        <HomeRegister />
        <Speakers />
      </div>
    </section>
  );
}
