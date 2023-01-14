import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import { Data, Login } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
