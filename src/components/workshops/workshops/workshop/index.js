import React from "react";
import Image from "./Image";
import Info from "./Info";

export default function Workshop({ data }) {
  return (
    <div className="flex flex-col items-center w-full mb-[26px] sm:w-[46%] md:w-[22%]">
      <Image data={data} />
      <Info data={data} />
    </div>
  );
}
