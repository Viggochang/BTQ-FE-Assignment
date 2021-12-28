import React from "react";
import Image from "./Image";
import Info from "./Info";

export default function Festival({ data }) {
  return (
    <div className="inner-flex-box md:w-[30.6%]">
      <Image data={data} />
      <Info data={data} />
    </div>
  );
}
