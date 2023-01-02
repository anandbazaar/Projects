import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Playlist, Songs } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/playlist"} element={<Playlist />} />
          <Route path={"/songs"} element={<Songs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
