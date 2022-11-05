import { Blog } from "../components/Blog";
import styles from "../styles/Blogs.module.css";
export const BlogPage = (props) => {
  return (
    <div className={styles.back}>
      <h1>Blog posts</h1>
      <p> our latest updates and blogs about managing our team</p>
    </div>
  );
};
