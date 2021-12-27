import React from "react";
import Title from "./Title";
import DateLoc from "./DateLoc";
import Intro from "./Intro";
import HomeRegister from "./HomeRegister";
import Speakers from "./speakers";

export default function Conference() {
  return (
    <section className="flex w-full px-[4vw] pt-[54px] bg-primary md:pt-[75px] md:px-[20px]">
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
