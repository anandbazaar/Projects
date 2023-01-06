import { Outlet } from "react-router-dom"
import { Navbar } from "./components"
import { Home } from "./pages"
import styles from "./style/layout.module.css"

export const Layout = () => {
    return(
    <div classname={styles.main}>
    <div className={styles.navbar}>
    <Navbar/>
    <Outlet/>
    </div>
    <Home/>
    </div>
    )
}