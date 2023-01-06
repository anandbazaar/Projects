import { Link } from "react-router-dom";
import styles from "../style/nav.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav1}>
      <Link className={styles.link1} to="/myurl">
        <p>My URLs</p>
      </Link>
      <Link className={styles.link1} to="/signin">
        <p>Sign in</p>
      </Link>
      <Link className={styles.link1} to="/signup">
        <p>Sign up</p>
      </Link>
    </div>
  );
};
