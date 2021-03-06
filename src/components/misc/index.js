import React from "react";
import InnerMiscs from "./miscs";

export default function Miscs({ data }) {
  return (
    <section
      className="section-background section-bg-image pb-[20px] md:pb-[68px]"
      style={{
        backgroundImage:
          "url(https://2012.buildconf.com/images/section_divider@2x.png)",
      }}
    >
      <div className="section-container">
        <InnerMiscs data={data} />
      </div>
    </section>
  );
}
