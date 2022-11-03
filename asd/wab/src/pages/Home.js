import "../styles/main.modules.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export const Home = (props) => {
  const [inputText, inputTextChanger] = useState("");
  return (
    <div className="part1">
      <div className="EmailInput">
        <>
          <h1 className="Title">Instant collaborations for remote teams</h1>
          <p className="descrip">
            All in one for your remote team chats, collaboration and track
            projects
          </p>
        </>
        <div className="emails">
          <input
            placeholder="Email"
            className="in"
            value={inputText}
            onChange={(e) => {
              inputTextChanger(e.target.value);
            }}
          ></input>
          <Button className="earlyAcc">Get early access</Button>
        </div>
      </div>
    </div>
  );
};
