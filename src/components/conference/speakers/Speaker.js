import React from "react";

export default function Speaker({ data }) {
  const { name, img } = data;
  return (
    <div className="mb-[26px]">
      <img alt={name} src={img} className="w-[219px] h-[219px]" />
      <h3 className="pt-[10px] text-[18px] text-[#ff9fac] leading-[21px] text-center">
        {name}
      </h3>
    </div>
  );
}
