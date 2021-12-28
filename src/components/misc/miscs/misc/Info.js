import React from "react";

export default function Info({ data }) {
  const { title, subtitle, intro, highlight } = data;

  return (
    <div className="pb-[27px]">
      <h4 className="mb-[2px] tracking-[1px] text-[12px] text-info-color leading-[21px] text-center uppercase">
        {subtitle}
      </h4>
      <h3 className="mb-[15px] tracking-[1px] text-[18px] leading-[21px] text-center font-light md:mb-[21px]">
        {title}
      </h3>
      <p className="inline text-[13px] leading-[21px] text-intro-color-2 font-light">
        {intro}
      </p>
      <p className="inline text-[13px] leading-[21px] text-primary font-light">
        {highlight || null}
      </p>
    </div>
  );
}
