import React from "react";
import NavigationItem from "./NavigationItem";

import { navData } from "../../../../data/data";

export default function Navigation({ display }) {
  const navigationStyle = `${display} w-full absolute top-[45px] px-[10px] pb-[3px] z-20 bg-my-black md:hidden`;
  return (
    <div className={navigationStyle}>
      {navData.map((data) => (
        <NavigationItem key={data[0]} data={data} />
      ))}
    </div>
  );
}
