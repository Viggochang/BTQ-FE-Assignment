import Header from "./components/header";
import Pattern from "./components/pattern";
import Conference from "./components/conference";
import Workshops from "./components/workshops";
import Festival from "./components/festival";

import { workshopsData, festivalData, fringeData } from "./data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Pattern />
      <Conference />
      <Workshops data={workshopsData} />
      <Festival data={festivalData} />
    </div>
  );
}

export default App;
