import React from "react";
import Title from "./Title";
import Intro from "./Intro";
import InnerFestivals from "./festivals";

export default function Festival({ data }) {
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
        <InnerFestivals data={data.content} />
      </div>
    </section>
  );
}
