import styles from "../styles/Blog.module.css";
import headImage from "../asset/Slice3.svg";
import profImage from "../asset/Ellipse.png";
export const Blog = (props) => {
  return (
    <div className={styles.part1}>
      <img className={styles.headerImage} src={props.headImage}></img>
      <div className={styles.textPart}>
        <p className={styles.title}>{props.Title}</p>
        <p className={styles.desc}>{props.desc}</p>
        <div className={styles.iden}>
          <img src={props.profImag}></img>
          <p className={styles.nameDate}>{props.name}</p>
          <p className={styles.sep}>|</p>
          <p className={styles.nameDate}>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
