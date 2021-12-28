import React from "react";
import Image from "./Image";
import Info from "./Info";

export default function WorkshopFringe({ data }) {
  return (
    <div className="inner-flex-box sm:w-[46%] md:w-[22%]">
      <Image data={data} />
      <Info data={data} />
    </div>
  );
}
