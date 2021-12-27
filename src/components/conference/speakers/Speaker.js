import React from "react";

export default function Speaker({ data }) {
  const { name, img } = data;
  return (
    <div className="">
      <img alt={name} src={img} className="w-[219px] h-[219px]" />
    </div>
  );
}
