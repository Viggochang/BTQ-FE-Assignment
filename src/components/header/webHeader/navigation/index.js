import React from "react";
import NavigationItem from "./NavigationItem";

const data = [
  ["MONDAY", "FILM"],
  ["TUESDAY", "WORKSHOPS"],
  ["WEDNESDAY", "PRACTICAL"],
  ["THURSDAY", "CONFERENCE"],
  ["FRIDAY", "MUSIC"],
  ["VARIOUS", "FRINGE"],
];

export default function Navigation() {
  return (
    <nav className="flex w-full h-full pl-[26.5%] justify-between content-between flex-wrap">
      {data.map((data) => (
        <NavigationItem key={data[0]} data={data} />
      ))}
    </nav>
  );
}
