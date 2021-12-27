import React from "react";

export default function NavigationItem({ data }) {
  const [day, activity] = data;
  return (
    <div className="w-[20.5vw] py-[5px] text-white tracking-[1px] xl:w-[calc(1165px*0.205)]">
      <div className="text-[12px] text-[#909090] leading-[14px]">{day}</div>
      <div className="text-[14px] leading-[18px]">{activity}</div>
    </div>
  );
}
