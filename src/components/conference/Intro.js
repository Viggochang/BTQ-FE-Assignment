import React from "react";

import { conferenceData } from "../../data/data";

export default function Intro() {
  return (
    <div className="intro-background">
      <p className="intro-text text-[#ff9fac]">{conferenceData.intro}</p>
    </div>
  );
}
