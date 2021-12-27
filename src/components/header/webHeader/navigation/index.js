import React from "react";
import NavigationItem from "./NavigationItem";

import { navData } from "../../../../data/data";

export default function Navigation() {
  return (
    <nav className="flex w-full h-full pl-[26.5%] justify-between content-between flex-wrap">
      {navData.map((data) => (
        <NavigationItem key={data[0]} data={data} />
      ))}
    </nav>
  );
}
