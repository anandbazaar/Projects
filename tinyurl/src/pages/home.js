import styles from "../style/home.module.css";
import Button from "react-bootstrap/Button";
import { Logo } from "../assets/";
import { Form } from "react-bootstrap";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../common/UserContext";
export const Home = () => {
  const [url, setUrl] = useState("");
  const baseurl = "http://localhost:3030/";
  const user = useContext(UserContext);

  const makeUrl = () => {
    if (url === "") return;
    const body = {
      longUrl: url,
      tinyUrl:
        "http://localhost:3030/myurl/" +
        Math.floor(Math.random() * 999999).toString(),
      createdBy: user.uid,
    };
    axios
      .post(baseurl + "tiny", body, {
        headers: {
          authorization: user.token,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={styles.back}>
      <div className={styles.head}>
        <Logo />
      </div>
      <div className={styles.shorter}>
        <p>Enter a long URL to make a TinyURL</p>
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        ></input>{" "}
        <br></br>
        <button onClick={makeUrl}>Make TinyURL!</button>
      </div>
    </div>
  );
};
