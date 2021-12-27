import React from "react";

export default function Workshop({ data }) {
  const { title, subtitle, intro, img } = data;
  return (
    <div className="section-main">
      <div className="flex w-full h-[226px] bg-primary">
        <img
          alt={title}
          src={img}
          className="w-[219px] mx-auto md:w-[20.15vw] md:max-w-[219px]"
        />
      </div>
    </div>
  );
}
