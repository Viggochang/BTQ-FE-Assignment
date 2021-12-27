import React from "react";
import { workshopsData } from "../../data/data";

export default function Title() {
  return (
    <div
      className="title-background"
      style={{
        "background-image":
          "url(https://2012.buildconf.com/images/nuts_white_red@2x.png)",
      }}
    >
      <h2 className="title-text text-my-black pt-0">{workshopsData.title}</h2>
    </div>
  );
}
