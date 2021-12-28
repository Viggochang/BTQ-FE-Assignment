import Header from "./components/header";
import Pattern from "./components/pattern";
import Conference from "./components/conference";
import WorkshopsFringes from "./components/workshops_fringes";
import Festival from "./components/festival";

import { workshopsData, festivalData, fringeData } from "./data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Pattern />
      <Conference />
      <WorkshopsFringes data={workshopsData} />
      <Festival data={festivalData} />
      <WorkshopsFringes data={fringeData} />
    </div>
  );
}

export default App;
