import { useState } from "react";
import styles from "../style/inputfield.module.css";
import axios from "../../node_modules/axios/index";
export const Inputfield = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [privatee, setPrivate] = useState(false);
  const baseurl = "http://localhost:3030/";
  const uid = localStorage.getItem("uid");
  console.log(uid);
  const createPlaylist = () => {
    const playlist = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      isPrivate: document.querySelector("#private").checked,
      createdBy: uid,
    };
    axios.post(baseurl + "playlist", playlist);
  };
  return (
    <div className={styles.inputField}>
      <input
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      ></input>
      <input
        id="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></input>
      <input
        id="private"
        checked={privatee}
        onClick={() => {
          setPrivate((privatee) => !privatee);
        }}
        type={"radio"}
      ></input>
      <button onClick={createPlaylist}>create</button>
    </div>
  );
};
