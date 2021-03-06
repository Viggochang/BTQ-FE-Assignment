import React from "react";

export default function NavIcon({ display, handleClick }) {
  return (
    <div
      className="flex w-[18px] h-[18px] mt-[16px] mr-[17px] flex-col"
      onClick={() => handleClick(display === "hidden" ? "block" : "hidden")}
    >
      <div className="w-full h-[3px] bg-white mb-[3px] rounded-[3px]" />
      <div className="w-full h-[3px] bg-white mb-[3px] rounded-[3px]" />
      <div className="w-full h-[3px] bg-white mb-[3px] rounded-[3px]" />
    </div>
  );
}
