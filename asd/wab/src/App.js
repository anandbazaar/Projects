import "./App.css";
import { Review, Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Products } from "./pages/Products.js";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { LogIn } from "./pages/LogIn";
import { GetAccess } from "./pages/GetAccess";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/LogIn"} element={<LogIn />} />
          <Route path={"/GetAccess"} element={<GetAccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
