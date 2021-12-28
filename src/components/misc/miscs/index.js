import React from "react";
import Misc from "./misc";

export default function InnerMiscs({ data }) {
  return (
    <div className="section-main-group justify-around md:justify-between">
      {data.map((data) => (
        <Misc key={data.title} data={data} />
      ))}
    </div>
  );
}
