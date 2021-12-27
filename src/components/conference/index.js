import React from "react";
import Title from "./Title";
import DateLoc from "./DateLoc";
import Intro from "./Intro";
import HomeRegister from "./HomeRegister";
import Speakers from "./speakers";

export default function Conference() {
  return (
    <section
      className="section-background section-bg-image"
      style={{
        "background-image":
          "url(https://2012.buildconf.com/images/conf_bg@2x2.png)",
      }}
    >
      <div class="flex flex-col items-center xl:container xl:mx-auto w-full">
        <Title />
        <DateLoc />
        <Intro />
        <HomeRegister />
        <Speakers />
      </div>
    </section>
  );
}
