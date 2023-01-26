import { UrlList } from "../components";
import styles from "../style/myurl.module.css";
import axios from "../../node_modules/axios/index";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../common/UserContext";
export const MyUrl = () => {
  const [urlData, setUrlData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(999);
  const baseurl = "http://localhost:3030/";
  const user = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    axios
      .get(baseurl + "myurl?id=" + user.uid + "&page=" + page, {
        headers: {
          authorization: user.token,
        },
      })
      .then((res) => {
        setUrlData(res.data);
        if (res.data.length !== 5) setLimit(page);
      });
  }, [page]);
  return (
    <div className={styles.main}>
      <div className={styles.myurls}>
        {urlData
          ? urlData.map((x, i) => {
              return (
                <UrlList
                  key={i}
                  newUrl={urlData[i].tinyUrl}
                  oldUrl={urlData[i].longUrl}
                ></UrlList>
              );
            })
          : console.log("asd")}
      </div>
      <div className={styles.paga}>
        <div
          onClick={() => {
            if (page === 1) return;
            setPage((prev) => prev - 1);
          }}
        >
          ←
        </div>
        <div>{page}</div>
        <div
          onClick={() => {
            if (page === limit) return;
            setPage((prev) => prev + 1);
          }}
        >
          →
        </div>
      </div>
    </div>
  );
};
