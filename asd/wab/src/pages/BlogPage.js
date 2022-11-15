import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../common/ThemeProvider";
import { Blog } from "../components/Blog";
import styles from "../styles/Blogs.module.css";
import data from "../data/blogs.json";
import axios from "../../node_modules/axios/index";
import Spinner from "../../node_modules/react-bootstrap/esm/Spinner";
export const BlogPage = (props) => {
  const [page, pageChange] = useState(0);
  const [limit, limitChange] = useState(10);
  const [datar, datarChange] = useState(null);
  const baseUrl = "https://dummyapi.io/data/v1/";
  useEffect(() => {
    axios
      .get(baseUrl + `post?page=${page}&limit=${limit}`, {
        headers: {
          "app-id": "636f2fbee8d0ffd95f3fc53f",
        },
      })
      .then((res) => {
        datarChange(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);
  const { theme, themeChanger } = useContext(ThemeContext);
  console.log(datar);
  return (
    <div className={theme.palette.dark ? styles.backdark : styles.back}>
      <h1>Blog posts</h1>
      <p> our latest updates and blogs about managing our team</p>
      <div className={styles.blogCont}>
        <button></button>
        {datar !== null ? (
          datar.map((x, i) => {
            return (
              <Blog
                headImage={x.image}
                Title={x.text}
                desc="lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum "
                profImag={x.owner.picture}
                name={x.owner.firstName}
                date={x.publishDate}
              />
            );
          })
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </div>
  );
};
