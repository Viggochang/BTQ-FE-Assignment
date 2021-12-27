import React from "react";
import Title from "./Title";
import Intro from "./Intro";
import InnerFestivals from "./festivals";

export default function Festival() {
  return (
    <section className="section-background">
      <div class="section-container">
        <Title />
        <Intro />
        <InnerFestivals />
      </div>
    </section>
  );
}
