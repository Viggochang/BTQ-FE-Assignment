import React from "react";
import WorkshopFringe from "./workshop_fringe";

export default function InnerWorkshopsFringes({ data }) {
  return (
    <div className="section-main-group justify-around md:justify-between">
      {data.map((data) => (
        <WorkshopFringe key={data.title} data={data} />
      ))}
    </div>
  );
}
