import { UrlList } from "../components";
import styles from "../style/myurl.module.css";
import axios from "../../node_modules/axios/index"
import { useEffect, useState } from "react";
export const MyUrl = () => {
  const [urlData,setUrlData] = useState(null)
  const baseurl = 'http://localhost:3050/'
  useEffect(()=>{
    axios.get(baseurl + 'myurl').then((res)=> {
      setUrlData(res.data)
    })
  },[])
  return (
    <div className={styles.main}>
      <div className={styles.myurls}>
       {
        urlData ?
        urlData.map((x,i)=>{
          return(
            <UrlList key={i} newUrl={urlData[i].tinyUrl} oldUrl={urlData[i].longUrl}></UrlList>
          )
        })
        : console.log('asd')
       }
      </div>
    </div>
  );
};
