import React from "react";

export default function Header() {
  return (
    <header className="flex w-full h-[156px] py-[30px] bg-my-black">
      <div class="xl:container xl:mx-auto w-full">
        <div
          className="w-1/5 h-[90px] bg-no-repeat bg-cover bg-center"
          style={{
            "background-image":
              "url(https://2012.buildconf.com/images/logo-knockout@2x.png)",
          }}
        />
      </div>
    </header>
  );
}
