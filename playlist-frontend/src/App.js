import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Playlist, Songs } from "./pages";
import { Signup } from "./pages/";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/playlist"} element={<Playlist />} />
          <Route path={"/songs"} element={<Songs />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
