import React from "react";
import Sponsers from "./sponsers";

export default function Sponser({ data }) {
  return (
    <section className="sponser-background">
      <div className="section-container">
        <h4 className="mb-[2px] tracking-[1px] text-[12px] text-[#999] leading-[21px] text-center uppercase">
          Thanks to Our Sponsors
        </h4>
        <Sponsers data={data} />
      </div>
    </section>
  );
}
