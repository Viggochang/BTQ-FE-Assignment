import React from "react";

export default function Intro({ intro }) {
  return (
    <div className="intro-background">
      <p className="intro-text text-[#909090]">{intro}</p>
    </div>
  );
}
