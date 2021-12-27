import React from "react";
import Workshop from "./Workshop";

import { workshopsData } from "../../../data/data";

const { workshops } = workshopsData;
export default function InnerWorkshops() {
  return (
    <div className="section-main-group">
      {workshops.map((data) => (
        <Workshop key={data.title} data={data} />
      ))}
    </div>
  );
}
