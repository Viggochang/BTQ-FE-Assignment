import React from "react";
import Title from "./Title";
import Intro from "./Intro";
import InnerWorkshops from "./workshops";

export default function Workshops({ data }) {
  return (
    <section className="section-background">
      <div class="section-container">
        <Title title={data.title} />
        <Intro intro={data.intro} />
        <InnerWorkshops data={data.content} />
      </div>
    </section>
  );
}
