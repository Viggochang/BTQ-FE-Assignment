import Header from "./components/header";
import Pattern from "./components/pattern";
import Conference from "./components/conference";
import WorkshopsFringes from "./components/workshops_fringes";
import Festival from "./components/festival";
import Misc from "./components/misc";

import { workshopsData, festivalData, fringeData, miscData } from "./data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Pattern />
      <Conference />
      <WorkshopsFringes data={workshopsData} />
      <Festival data={festivalData} />
      <WorkshopsFringes data={fringeData} />
      <Misc data={miscData} />
    </div>
  );
}

export default App;
