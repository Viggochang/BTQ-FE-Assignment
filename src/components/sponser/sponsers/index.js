import React from "react";
import Sponser from "./sponser";

export default function Sponsers({ data }) {
  return (
    <div className="section-main-group justify-around md:justify-between">
      {data.map((data) => (
        <Sponser key={data.name} data={data} />
      ))}
    </div>
  );
}
