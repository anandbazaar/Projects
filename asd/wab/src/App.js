import "./App.css";
import { Review, Header, Blog, Footer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Products } from "./pages/Products.js";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { LogIn } from "./pages/LogIn";
import { GetAccess } from "./pages/GetAccess";
import { BlogPage } from "./pages/BlogPage";
import { useState } from "react";
import { ThemeProvider } from "./common/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path={"/blog"} element={<BlogPage />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/services"} element={<Services />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/LogIn"} element={<LogIn />} />
            <Route path={"/GetAccess"} element={<GetAccess />} />
          </Routes>
          <Footer />
        </div>
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
