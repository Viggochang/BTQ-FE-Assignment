import React from "react";
import Info from "./Info";

export default function Misc({ data }) {
  return (
    <div className="flex flex-col items-center w-full mb-0 sm:w-[48%]">
      <Info data={data} />
    </div>
  );
}
