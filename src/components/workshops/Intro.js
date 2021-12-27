import React from "react";
import { workshopsData } from "../../data/data";

export default function Intro() {
  return (
    <div className="intro-background">
      <p className="intro-text text-[#909090]">{workshopsData.intro}</p>
    </div>
  );
}
