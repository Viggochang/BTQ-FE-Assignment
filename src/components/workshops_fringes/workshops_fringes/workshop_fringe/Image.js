import React from "react";

export default function Image({ data }) {
  const { title, img } = data;
  return (
    <div className="flex w-full h-[226px] justify-center bg-primary rounded-[4px] md:h-auto md:pb-[10px]">
      <img
        alt={title}
        src={img}
        className="w-[219px] md:w-[20.15vw] md:max-w-[219px] rounded-[4px] self-center"
      />
    </div>
  );
}
