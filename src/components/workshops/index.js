import React from "react";
import Title from "./Title";
import Intro from "./Intro";
import InnerWorkshops from "./workshops";

export default function Workshops() {
  return (
    <section className="section-background">
      <div class="section-container">
        <Title />
        <Intro />
        <InnerWorkshops />
      </div>
    </section>
  );
}
