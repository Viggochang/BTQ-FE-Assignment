import React from "react";

export default function Sponser({ data }) {
  return (
    <div className="flex flex-col items-center w-[50%] mb-[26px] pt-[10px] pb-[13px] md:w-[12.6%] md:pb-0 md:mx-[2%]">
      <img
        alt={data.name}
        src={data.img}
        className="w-[100%] max-w-[60%] md:max-w-[219px] rounded-[4px] self-center"
      />
    </div>
  );
}
