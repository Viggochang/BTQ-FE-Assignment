import React from "react";

import { conferenceData } from "../../data/data";

export default function Intro() {
  return (
    <div className="intro-background">
      <p className="intro-text text-intro-color-conf">{conferenceData.intro}</p>
    </div>
  );
}
