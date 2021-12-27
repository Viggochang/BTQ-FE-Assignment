import React from "react";

import { conferenceData } from "../../data/data";

export default function Title() {
  return (
    <div
      className="title-background"
      style={{
        "background-image":
          "url(https://2012.buildconf.com/images/nuts_red@2x.png)",
      }}
    >
      <h2 className="title-text text-white">{conferenceData.title}</h2>
    </div>
  );
}
