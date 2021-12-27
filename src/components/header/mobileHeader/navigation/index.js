import React from "react";
import NavigationItem from "./NavigationItem";

import { navData } from "../../../../data/data";

export default function Navigation() {
  return (
    <div className="w-full absolute top-[45px] px-[10px]">
      {navData.map((data) => (
        <NavigationItem data={data} />
      ))}
    </div>
  );
}
