import { uuid } from "uuidv4";
import styles from "../styles/Review.module.css";
export const Review = (props) => {
  return (
    <div className={styles.Review}>
      {props.starCount}
      {props.text}
      <img className={styles.pfp} src={props.pfp}></img>
    </div>
  );
};
