import React from "react";

export default function MobileHeader() {
  return (
    <header className="flex w-full h-[48px] bg-my-black justify-between md:hidden">
      <div
        className="w-[44px] h-[44px] mb-auto mt-[1px] ml-[4px] bg-[length:238px_90px] bg-center"
        style={{
          "background-image":
            "url(https://2012.buildconf.com/images/logo-knockout@2x.png)",
        }}
      />
    </header>
  );
}
