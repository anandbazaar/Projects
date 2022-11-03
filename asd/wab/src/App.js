import logo from "./logo.svg";
import "./App.css";
import { Review } from "./components";
import { Header } from "./components";
import {
  BrowserRouter,
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";
import { Home } from "./pages/Home.js";
import { Products } from "./pages/Products.js";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { LogIn } from "./pages/LogIn";
import { GetAccess } from "./pages/GetAccess";




function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Review
        numStar={3}
        name ='andy'
        text="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
      ></Review>
    </div>
=======
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
>>>>>>> refs/remotes/origin/main
  );
}

export default App;
