import styles from "../style/home.module.css";
import Button from "react-bootstrap/Button";
import { Logo } from "../assets/";
import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export const Home = () => {
  const [url, setUrl] = useState("");
  const baseurl = 'http://localhost:3050/'

  const makeUrl = () =>{
    if(url === "") return
    const body = {
      longUrl: url,
      tinyUrl: 'http://localhost:3000/' + Math.floor(Math.random() * 999999).toString(),
      createdBy: 'me',
    }
    axios.post(baseurl + 'tiny',body).then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className={styles.back}>
      <div className={styles.head}>
        <Logo />
      </div>
      <div className={styles.shorter}>

        <p>Enter a long URL to make a TinyURL</p>
        <input value={url} onChange={(e)=>{setUrl(e.target.value)}}></input> <br></br>
        <button onClick={makeUrl}>Make TinyURL!</button>  
      </div>
    </div>
  );
};
