import { useContext, useEffect, useRef, useState } from "react";
import styles from "../styles/Prg.module.css";
import { HiddenContext } from "./Context";

export const ProgressBar = (props) => {
  const [playing, isPlayingChange] = props.play;
  const prgBar = useRef();
  const { hidden, changeState } = useContext(HiddenContext);
  const [a, b] = useState(0);

  useEffect(() => {
    if (playing) {
      var id = setInterval(() => {
        b((prev) => prev + 1);
      }, 10);
    }
    if (!playing) {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [playing]);
  useEffect(() => {}, [hidden]);
  return (
    <div
      ref={prgBar}
      className={hidden === true ? styles.hidden : styles.exposed}
    >
      <div
        className={hidden === true ? styles.hiddenBar : styles.exposedBar}
        style={
          hidden === true ? { height: a / 100 + "%" } : { width: a / 100 + "%" }
        }
      ></div>
    </div>
  );
};
