import { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider";
import styles from "../styles/products.module.css";

export const Products = (props) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  if (theme.palette.dark === false)
    return <div className={styles.ava}>asd</div>;
  if (theme.palette.dark === true)
    return <div className={styles.bada}>asd</div>;
};
