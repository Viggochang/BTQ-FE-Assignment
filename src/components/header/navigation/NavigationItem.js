import React from "react";

export default function NavigationItem({ data }) {
  const [day, activity] = data;
  return (
    <div className="w-[20.5vw] py-[5px] text-white">
      <div className="text-[12px] text-[#909090] leading-[14px]">{day}</div>
      <div>{activity}</div>
    </div>
  );
}
