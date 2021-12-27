import React from "react";

import { conferenceData } from "../../data/data";

export default function Title() {
  return (
    <div
      className="mb-[13px] bg-[length:54px_11px] bg-no-repeat bg-bottom md:mb-[12px] lg:mb-[10px]"
      style={{
        "background-image":
          "url(https://2012.buildconf.com/images/nuts_red@2x.png)",
      }}
    >
      <h2 className="pt-[9px] pb-[22px] text-[30px] text-white leading-[42px] text-center md:pt-[43px] md:pb-[25px] md:text-[38px] lg:text-[48px] lg:leading-[50px] lg:pb-[30px]">
        {conferenceData.title}
      </h2>
    </div>
  );
}
