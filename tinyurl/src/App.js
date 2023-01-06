import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home, MyUrl, Signin, Signup } from "./pages";
import styles from "./style/app.module.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div></div>} />
          <Route path="/myurl" element={<MyUrl />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
