import React from "react";

export default function Intro({ intro }) {
  return (
    <div className="intro-background">
      <p className="intro-text text-intro-color">{intro}</p>
    </div>
  );
}
