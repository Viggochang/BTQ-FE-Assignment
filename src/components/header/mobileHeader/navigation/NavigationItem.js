import React from "react";

export default function NavigationItem({ data }) {
  const [day, activity] = data;
  return (
    <div className="w-full h-[49px] border-t-[1px] py-[8px] pl-[10px] border-[#272727] border-solid tracking-[1px]">
      <div className="text-[9px] text-[#909090] leading-[14px]">{day}</div>
      <div className="text-[12px] text-white leading-[18px] font-bold">
        {activity}
      </div>
    </div>
  );
}
