import React from "react";
import Navigation from "./navigation";

export default function WebHeader() {
  return (
    <header className="web-header">
      <div className="xl:container xl:mx-auto w-full">
        <div
          className="web-logo"
          style={{
            backgroundImage:
              "url(https://2012.buildconf.com/images/logo-knockout@2x.png)",
          }}
        />
        <Navigation />
      </div>
    </header>
  );
}
