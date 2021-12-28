import React from "react";

export default function Contact({ data }) {
  const { title, subtitle, img } = data;
  return (
    <div className="flex flex-col items-center w-[50%] mb-[25px] md:w-[22%]">
      <h4 className="hidden sm:block mb-[2px] tracking-[1px] text-[12px] text-info-color leading-[21px] text-center uppercase">
        {subtitle}
      </h4>
      <h3 className="text-[14px] mb-[15px] tracking-[1px] sm:text-[18px] text-contact-color leading-[21px] text-center font-light md:mb-[21px]">
        {title}
      </h3>
      <div
        className="w-full h-[36px] bg-no-repeat bg-[length:36px_36px] bg-bottom"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
}
