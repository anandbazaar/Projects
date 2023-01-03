import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import { AddToPlaylist, Songcard } from "../components";
export const Songs = () => {
  const baseurl = "http://localhost:3030/";
  const [song,setSong] = useState()
  const [songArr, setSongArr] = useState(null);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    axios.get(baseurl + "songs").then((res) => {
      setSongArr(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      {songArr !== null
        ? songArr.map((x, i) => {
            return (
              <div>
                <Songcard
                  artist={x.artist}
                  duration={x.duration}
                  title={x.title}
                  key={i}
                />
                <button   
                  onClick={() => {
                    setIsShown(true);
                    setSong(x)
                  }}
                >
                  +
                </button>
              </div>
            );
          })
        : console.log("asd")}
      {isShown && <AddToPlaylist song ={song}/>}
    </div>
  );
};
