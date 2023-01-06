import { Link } from "react-router-dom";
import { Logo } from "../assets";
import styles from "../style/sign.module.css";
export const Signin = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Sign}>
        <Logo></Logo>
        <h1>Welcome to TinyURL</h1>
        <p>Email</p>
        <input></input>
        <p>password</p>
        <input></input>
        <button>Sign in</button>
        <span>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};
