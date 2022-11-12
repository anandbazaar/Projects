import style from "../styles/main.module.css";
import data from "../data/reviewData.json";
import { useContext, useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Footer, Review } from "../components/index";
import { Prev } from "../../node_modules/react-bootstrap/esm/PageItem";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../common/ThemeProvider";
import axios from "../../node_modules/axios/index";
const goRight = (props) => {
  props[1](props[0] + 1);
};
const goLeft = (props) => {
  props[1](props[0] - 1);
};
export const Home = (props) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [index, IndexC] = useState(0);
  const back = useRef();
  const [inputText, inputTextChanger] = useState("");
  return (
    <div>
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
      <div
        ref={back}
        className={theme.palette.dark ? style.part2dark : style.part2}
      >
        <div
          className={style.ReviewCont}
          style={{
            transform: `translateX(${-(100 / data.Da.length) * index}% `,
            transition: "300ms",
          }}
        >
          {data.Da.map((x, i) => {
            return (
              <Review
                key={uuidv4()}
                starCount={x.numStar}
                text={x.text}
                pfp={x.pfp}
              />
            );
          })}
        </div>
        <Button
          onClick={() => {
            goRight([index, IndexC]);
          }}
          className={style.forward}
        >
          F
        </Button>
        <Button
          onClick={() => {
            goLeft([index, IndexC]);
          }}
          className={style.backward}
        >
          B
        </Button>
      </div>
    </div>
  );
};
