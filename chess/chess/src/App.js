import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components";

function App() {
  const ChessBoard = [
    ["h", "g", "f", "e", "d", "c", "b", "a"],
    ["h", "g", "f", "e", "d", "c", "b", "a"],
    ["h", "g", "f", "e", "d", "c", "b", "a"],
    ["h", "g", "f", "e", "d", "c", "b", "a"],
    ["h", "g", "f", "e", "d", "c", "b", "a"],
    ["h", "g", "f", "e", "d", "c", "b", "a"],
    ["h", "g", "f", "e", "d", "c", "b", "a"],
    ["h", "g", "f", "e", "d", "c", "b", "a"],
  ];
  return (
    <div className="App">
      <div className="Frame">
        <Board />
      </div>
    </div>
  );
}

export default App;
