import React from "react";

export default function Contact(data) {
  const { title, subtitle, image } = data;
  return (
    <div className="flex flex-col items-center w-[50%] mb-[25px] md:w-[22%]">
      <h4 className="mb-[2px] tracking-[1px] text-[12px] text-[#999] leading-[21px] text-center uppercase">
        {subtitle}
      </h4>
      <h3 className="mb-[15px] tracking-[1px] text-[18px] leading-[21px] text-center font-light md:mb-[21px]">
        {title}
      </h3>
    </div>
  );
}
