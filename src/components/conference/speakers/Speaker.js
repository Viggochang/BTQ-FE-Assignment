import React from "react";

export default function Speaker({ data }) {
  const { name, img } = data;
  return (
    <div className="section-speaker">
      <img
        alt={name}
        src={img}
        className="w-[219px] md:w-[20.15vw] md:max-w-[219px]"
      />
      <h3 className="w-[219px] pt-[10px] text-[18px] text-intro-color-conf leading-[21px] text-center md:w-[20.15vw] md:max-w-[219px]">
        {name}
      </h3>
    </div>
  );
}
