import React from "react";

export default function Info({ data }) {
  const { title, subtitle, intro } = data;

  return (
    <div className="py-[27px]">
      <h4 className="inner-subtitle-text">{subtitle}</h4>
      <h3 className="inner-title-text text-[18px] leading-[21px]">{title}</h3>
      <p className="inner-intro-text">{intro}</p>
    </div>
  );
}
