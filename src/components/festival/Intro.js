import React from "react";
import { festivalData } from "../../data/data";

export default function Intro() {
  return (
    <div className="intro-background">
      <p className="intro-text text-[#909090]">{festivalData.intro}</p>
    </div>
  );
}
