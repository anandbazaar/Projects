import style from "../styles/main.module.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export const Home = (props) => {
  const [inputText, inputTextChanger] = useState("");
  return (
    <div className={style.part1}>
      <div className={style.EmailInput}>
        <>
          <h1 className={style.Title}>
            Instant collaborations for remote teams
          </h1>
          <p className={style.descrip}>
            All in one for your remote team chats, collaboration and track
            projects
          </p>
        </>
        <div className={style.emails}>
          <input
            placeholder="Email"
            className={style.in}
            value={inputText}
            onChange={(e) => {
              inputTextChanger(e.target.value);
            }}
          ></input>
          <Button className={style.earlyAcc}>Get early access</Button>
        </div>
      </div>
    </div>
  );
};
