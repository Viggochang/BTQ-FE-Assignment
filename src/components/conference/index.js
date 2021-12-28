import React from "react";
import Title from "./Title";
import DateLoc from "./DateLoc";
import Intro from "./Intro";
import HomeRegister from "./HomeRegister";
import Speakers from "./speakers";

export default function Conference() {
  return (
    <section
      className="section-background conference-bg-image bg-primary pt-[54px] pb-[171px] md:pb-[214px]"
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
