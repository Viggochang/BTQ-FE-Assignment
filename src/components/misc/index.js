import React from "react";
import InnerMiscs from "./miscs";

export default function Miscs({ data }) {
  return (
    <section className="section-background">
      <div className="section-container">
        <InnerMiscs data={data} />
      </div>
    </section>
  );
}
