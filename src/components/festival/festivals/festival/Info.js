import React from "react";

export default function Info({ data }) {
  const { title, subtitle, intro } = data;

  return (
    <div className="py-[27px]">
      <h4 className="mb-[2px] tracking-[1px] text-[12px] text-[#999] leading-[21px] text-center uppercase">
        {subtitle}
      </h4>
      <h3 className="mb-[15px] tracking-[1px] text-[22px] leading-[24px] text-center font-light md:mb-[21px]">
        {title}
      </h3>
      <p className="text-[13px] leading-[21px] text-[#808080] font-light">
        {intro}
      </p>
    </div>
  );
}
