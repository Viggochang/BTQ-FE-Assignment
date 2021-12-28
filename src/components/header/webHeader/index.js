import React from "react";
import Navigation from "./navigation";

export default function WebHeader() {
  return (
    <header className="hidden md:flex w-full h-[156px] py-[30px] bg-my-black">
      <div className="xl:container xl:mx-auto w-full">
        <div
          className="w-[20.5%] h-[90px] bg-no-repeat bg-cover bg-center absolute xl:w-[calc(1165px*0.205)]"
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
