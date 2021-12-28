import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Pattern from "./components/pattern";
import Conference from "./components/conference";
import WorkshopsFringes from "./components/workshops_fringes";
import Festival from "./components/festival";
import Misc from "./components/misc";
import Sponser from "./components/sponser";
import Footer from "./components/footer";
import Credit from "./components/credit";

import {
  workshopsData,
  festivalData,
  fringeData,
  miscData,
  sponserData,
  footerData,
} from "./data/data";

function App() {
  const [display, setDisplay] = useState("hidden");
  const [patternFix, setPatternFix] = useState(false);

  function handleScroll() {
    if (document.body.getBoundingClientRect().top < -156) {
      setPatternFix(true);
    } else {
      setPatternFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header display={display} setDisplay={setDisplay} />
      <Pattern display={display} patternFix={patternFix} />
      <Conference display={display} />
      <WorkshopsFringes data={workshopsData} />
      <Festival data={festivalData} />
      <WorkshopsFringes data={fringeData} />
      <Misc data={miscData} />
      <Sponser data={sponserData} />
      <Footer data={footerData} />
      <Credit />
    </div>
  );
}

export default App;
