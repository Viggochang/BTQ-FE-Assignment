import React from "react";
import Title from "./Title";
import DateLoc from "./DateLoc";
import Intro from "./Intro";

export default function Conference() {
  return (
    <section className="flex w-full px-[4vw] pt-[54px] bg-primary md:pt-[75px] flex-col items-center">
      <Title />
      <DateLoc />
      <Intro />
    </section>
  );
}
