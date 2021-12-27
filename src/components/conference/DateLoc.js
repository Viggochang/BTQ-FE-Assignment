import React from "react";

import { conferenceData } from "../../data/data";

export default function DateLoc() {
  return (
    <p className="pt-[3px] pb-[20px] text-[11px] text-white leading-[18px] text-center tracking-[1px] uppercase md:pb-[12px] md:leading-[21px] lg:pt-[8px] lg:pb-[10px]">
      {conferenceData.dateLoc}
    </p>
  );
}
