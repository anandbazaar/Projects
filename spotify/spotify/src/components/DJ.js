import { useEffect, useRef, useState } from "react";
import styles from "../styles/Dj.module.css";
import { useHidden } from "./Context";
import { ProgressBar } from "./ProgressBar";
import axios from "../../node_modules/axios/index";

const baseurl = "https://spotify-scraper.p.rapidapi.com/v1/track/download";

export const Dj = (props) => {
  const { hidden, changeState } = useHidden();
  const [audio, setAudio] = useState(null);
  const [data, setData] = useState(null);
  const [keyWord, keyWordChange] = useState("");
  const [search, setSearch] = useState("");
  const [isPlaying, changePlaying] = useState(false);

  const clickHandler = () => {
    if (hidden) {
      changeState();
    } else if (data) {
      changePlaying((prev) => !prev);
    }
  };

  useEffect(() => {
    if (isPlaying && audio) {
      audio.play();
    } else if (audio) {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    axios
      .get(baseurl + `?track=` + keyWord, {
        headers: {
          "X-RapidAPI-Key":
            "909a9752a2msh0b7f47cf1952823p1e4077jsn97ecb5da73e7",
          "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
        },
      })
      .then((res) => {
        setData(res.data);
        setAudio(new Audio(res.data.youtubeVideo.audio[0].url));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyWord]);

  return (
    <div className={hidden ? styles.hidden : styles.exposed}>
      <button
        style={{ animationPlayState: isPlaying ? "running" : "paused" }}
        className={hidden ? styles.sideBarClosed : styles.sideBarOpened}
        onClick={clickHandler}
      >
        <div className={hidden ? styles.innerClosed : styles.innerOpened}>
          <img
            className={styles.songCover}
            src={data ? data.spotifyTrack.album.cover[0].url : undefined}
          ></img>
          <div className={styles.pin}></div>
        </div>
      </button>

      <input
        value={search}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            keyWordChange(e.target.value);
            return;
          }
          setSearch((prev) => prev + e.key);
        }}
        placeholder="Search"
        className={hidden ? styles.gno : styles.search}
      >
        {props.title}
      </input>

      <ProgressBar play={[isPlaying, changePlaying]} />

      <div className={styles.control}>
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <i
            className="fa fa-pause"
            style={{ fontSize: "20px", color: "white" }}
          ></i>
        </button>
      </div>
    </div>
  );
};
