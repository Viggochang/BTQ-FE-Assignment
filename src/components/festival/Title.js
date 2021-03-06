import React from "react";

export default function Title({ title }) {
  return (
    <div
      className="title-background"
      style={{
        backgroundImage:
          "url(https://2012.buildconf.com/images/nuts_white_red@2x.png)",
      }}
    >
      <h2 className="title-text text-my-black pt-0">{title}</h2>
    </div>
  );
}
