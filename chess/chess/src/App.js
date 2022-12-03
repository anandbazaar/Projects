import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components";
import { Rook } from "./components/pieces";

function App() {
  return (
    <div className="App">
      <div className="Frame">
        <Board />
      </div>
    </div>
  );
}

export default App;
