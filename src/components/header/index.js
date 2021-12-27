import React from "react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="flex w-full h-[156px] py-[30px] bg-my-black">
      <div class="xl:container xl:mx-auto w-full">
        <div
          className="w-[20.5%] h-[90px] bg-no-repeat bg-cover bg-center absolute"
          style={{
            "background-image":
              "url(https://2012.buildconf.com/images/logo-knockout@2x.png)",
          }}
        />
        <Navigation />
      </div>
    </header>
  );
}
