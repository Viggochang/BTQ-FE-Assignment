import Header from "./components/header";
import Pattern from "./components/pattern";
import Conference from "./components/conference";
import Workshops from "./components/workshops";

function App() {
  return (
    <div className="App">
      {/* <div className="text-5xl font-bold underline">Hello world!</div> */}
      <Header />
      <Pattern />
      <Conference />
      <Workshops />
    </div>
  );
}

export default App;
