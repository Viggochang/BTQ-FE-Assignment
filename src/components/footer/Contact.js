import React from "react";

export default function Contact({ data }) {
  const { title, subtitle, img } = data;
  return (
    <div className="inner-flex-box w-[50%] mb-[25px] md:w-[22%]">
      <h4 className="inner-subtitle-text hidden sm:block">{subtitle}</h4>
      <h3 className="inner-title-text text-[14px] sm:text-[18px] text-contact-color leading-[21px]">
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
