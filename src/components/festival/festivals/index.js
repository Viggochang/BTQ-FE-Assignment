import React from "react";
import Festival from "./festival";

export default function InnerFestivals({ data }) {
  return (
    <div className="section-main-group justify-around md:justify-between">
      {data.map((data) => (
        <Festival key={data.title} data={data} />
      ))}
    </div>
  );
}
