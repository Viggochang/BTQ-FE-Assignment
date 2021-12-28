import React from "react";
import Title from "./Title";
import Intro from "./Intro";
import InnerWorkshopsFringes from "./workshops_fringes";

export default function WorkshopsFringes({ data }) {
  return (
    <section
      className="section-background section-bg-image"
      style={{
        backgroundImage:
          "url(https://2012.buildconf.com/images/section_divider@2x.png)",
      }}
    >
      <div className="section-container">
        <Title title={data.title} />
        <Intro intro={data.intro} />
        <InnerWorkshopsFringes data={data.content} />
      </div>
    </section>
  );
}
