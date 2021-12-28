import React from "react";

export default function Pattern({ display }) {
  const patternStyle = `absolute top-[${
    display === "hidden" ? "48px" : "342px"
  }] w-full h-[18px] bg-[length:1424px_40px] bg-bottom bg-repeat-x z-10 md:h-[31px] md:top-[156px]`;
  return (
    <div
      className={patternStyle}
      style={{
        backgroundImage:
          "url(https://2012.buildconf.com/images/pattern@2x.png)",
      }}
    ></div>
  );
}
