import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../common/UserContext";
import styles from "../style/nav.module.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const logout = () => {
    navigate("/signup");
    localStorage.setItem("token", null);
    window.location.reload();
  };
  if (user) {
    return (
      <div className={styles.nav1}>
        <div className={styles.link1}>{user.name}</div>
        <Link className={styles.link1} to="/myurl">
          <p>My URLs</p>
        </Link>
        <div onClick={logout} className={styles.link1}>
          <p>logout</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.nav1}>
        <Link className={styles.link1} to="/signin">
          <p>Sign in</p>
        </Link>
        <Link className={styles.link1} to="/signup">
          <p>Sign up</p>
        </Link>
      </div>
    );
  }
};
