import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";
import styles from "./style/layout.module.css";

export const Layout = () => {
  return (
    <div>
      <div className={styles.nav}>
        <Navbar />
        <Outlet className={styles.outlet} />
      </div>
      <Home />
    </div>
  );
};
