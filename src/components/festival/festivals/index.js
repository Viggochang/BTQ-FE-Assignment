import React from "react";
import Festival from "./festival";

import { festivalData } from "../../../data/data";

const { festivals } = festivalData;
export default function InnerFestivals() {
  return (
    <div className="section-main-group justify-around md:justify-between">
      {festivals.map((data) => (
        <Festival key={data.title} data={data} />
      ))}
    </div>
  );
}
