import React from "react";

import { conferenceData } from "../../data/data";

export default function Intro() {
  return (
    <div className="max-w-[560px] px-[3%] pb-[48px] md:px-0 lg:max-w-[815.5px] lg:w-[67.4vw] lg:pb-[20px]">
      <p className="text-[15px] text-[#ff9fac] leading-[21px] text-center font-light md:text-[17px] md:leading-[25px] lg:text-[21px] lg:leading-[32px]">
        {conferenceData.intro}
      </p>
    </div>
  );
}
