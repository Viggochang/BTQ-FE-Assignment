import React from "react";
import WebHeader from "./webHeader";
import MobileHeader from "./mobileHeader";

export default function Header({ display, setDisplay }) {
  return (
    <>
      <WebHeader />
      <MobileHeader display={display} setDisplay={setDisplay} />
    </>
  );
}
