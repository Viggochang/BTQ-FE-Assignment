import React from "react";
import Speaker from "./Speaker";

import { conferenceData } from "../../../data/data";

const { speakers } = conferenceData;
export default function Speakers() {
  return (
    <div className="flex flex-wrap justify-center px-[1.5%] md:px-0">
      {speakers.map((data) => (
        <Speaker key={data.name} data={data} />
      ))}
    </div>
  );
}
