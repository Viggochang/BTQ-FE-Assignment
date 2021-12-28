import React from "react";
import Contact from "./Contact";

export default function Footer({ data }) {
  return (
    <footer className="footer-background bg-my-black">
      <div className="section-container">
        <div className="section-main-group justify-around md:justify-between">
          {data.map((data) => (
            <Contact key={data.title} data={data} />
          ))}
        </div>
      </div>
    </footer>
  );
}
