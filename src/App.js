import Header from "./components/header";
import Pattern from "./components/pattern";
import Conference from "./components/conference";
import WorkshopsFringes from "./components/workshops_fringes";
import Festival from "./components/festival";
import Misc from "./components/misc";
import Sponser from "./components/sponser";
import Footer from "./components/footer";

import {
  workshopsData,
  festivalData,
  fringeData,
  miscData,
  sponserData,
} from "./data/data";

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
      <Sponser data={sponserData} />
      <Footer />
    </div>
  );
}

export default App;
