import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import styles from "../style/sign.module.css";
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseurl = "http://localhost:3030/";

  const setInput = (e, c) => {
    switch (c) {
      case "n":
        setName(e.target.value);
        break;
      case "e":
        setEmail(e.target.value);
        break;
      case "p":
        setPassword(e.target.value);
    }
  };

  const createUser = () => {
    const body = {
      name: name,
      email: email,
      pass: password,
    };
    axios.post(baseurl + "signup", body).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.Sign}>
        <Logo></Logo>
        <h1>Welcome to TinyURL</h1>
        <p>Name</p>
        <input
          onChange={(e) => {
            setInput(e, "n");
          }}
          value={name}
        ></input>
        <p>Email</p>
        <input
          onChange={(e) => {
            setInput(e, "e");
          }}
          value={email}
        ></input>
        <p>Password</p>
        <input
          onChange={(e) => {
            setInput(e, "p");
          }}
          value={password}
        ></input>
        <button onClick={createUser}>Create an account</button>
        <span>
          Already a user? <Link to="/signin">login</Link>
        </span>
      </div>
    </div>
  );
};
