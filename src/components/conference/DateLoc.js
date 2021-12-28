import React from "react";

import { conferenceData } from "../../data/data";

export default function DateLoc() {
  return <p className="dateloc-text">{conferenceData.dateLoc}</p>;
}
