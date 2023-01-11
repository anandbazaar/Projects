import { Link } from "react-router-dom";
import { Logo } from "../assets";
import styles from "../style/sign.module.css";
export const Signup = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Sign}>
        <Logo></Logo>
        <h1>Welcome to TinyURL</h1>
        <p>Name</p>
        <input></input>
        <p>Email</p>
        <input></input>
        <p>Password</p>
        <input></input>
        <button>Create an account</button>
        <span>
          Already a user? <Link to="/signin">login</Link>
        </span>
      </div>
    </div>
  );
};
