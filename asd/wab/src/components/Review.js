import { uuid } from "uuidv4";
import styles from "../styles/Review.module.css";
export const Review = (props) => {
  return <div className={styles.Review}>
    {console.log(props.starCount)}
    {props.starCount}
  </div>;
};
