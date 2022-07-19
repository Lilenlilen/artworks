import obrasArte from "./data/obras.json";
import "./App.css";
import { Timeline } from "./components/Timeline";

function App() {
  console.log(obrasArte);
  return (
    <div className="App">
      <header>
        <h1>Obras de Arte</h1>
      </header>

      <main>
        <Timeline data={obrasArte} />
      </main>

      <footer>-2022-</footer>
    </div>
  );
}

export default App;
