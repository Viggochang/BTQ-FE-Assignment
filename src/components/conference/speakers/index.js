import React from "react";
import Speaker from "./Speaker";

import { conferenceData } from "../../../data/data";

const { speakers } = conferenceData;
export default function Speakers() {
  return (
    <div>
      {speakers.map((data) => (
        <Speaker key={data.name} data={data} />
      ))}
    </div>
  );
}
