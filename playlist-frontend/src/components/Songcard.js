import styles from "../style/songcard.module.css";
export const Songcard = (props) => {
  return (
    <div className={styles.songcard}>
      <div>{props.title}</div>
      <div>{props.artist}</div>
      <div>{props.duration}</div>
    </div>
  );
};
