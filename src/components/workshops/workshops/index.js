import React from "react";
import Workshop from "./workshop";

import { workshopsData } from "../../../data/data";

const { workshops } = workshopsData;
export default function InnerWorkshops() {
  return (
    <div className="section-main-group justify-around md:justify-between">
      {workshops.map((data) => (
        <Workshop key={data.title} data={data} />
      ))}
    </div>
  );
}
