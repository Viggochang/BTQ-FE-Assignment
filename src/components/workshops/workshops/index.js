import React from "react";
import Workshop from "./workshop";

export default function InnerWorkshops({ data }) {
  return (
    <div className="section-main-group justify-around md:justify-between">
      {data.map((data) => (
        <Workshop key={data.title} data={data} />
      ))}
    </div>
  );
}
