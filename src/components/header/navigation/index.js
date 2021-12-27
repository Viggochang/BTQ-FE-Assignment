import React from "react";
import NavigationItem from "./NavigationItem";

const data = [
  ["MONDAY", "FILM"],
  ["TUESDAY", "WORKSHOPS"],
  ["WEDNESDAY", "PRACTICAL"],
  ["THURSDAY", "CONFERENCE"],
  ["FRIDAY", "MUSIC"],
  ["SATURDAY", "FRINGE"],
];

export default function Navigation() {
  return (
    <nav>
      {data.map((data) => (
        <NavigationItem data={data} />
      ))}
    </nav>
  );
}
