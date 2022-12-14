import { useEffect } from "react";
import styles from "../style/card.module.css";
export const Card = (props) => {
  console.log(props.creator);
  const uid = localStorage.getItem("uid");
  if (props.creator !== uid) return;
  const dis = () => {
    props.setIndex(props.index);
    console.log(props.index);
  };
  return (
    <div onClick={dis} id="card" className={styles.card}>
      <div className={styles.coverArt}></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};
