import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
export const AddToPlaylist = (props) => {
  console.log(props.song);
  const baseurl = "http://localhost:3030/";
  const [playlist, setPlaylist] = useState(null);
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    axios.get(baseurl + "playlists").then((res) => {
      setPlaylist(res.data);
      console.log(res.data);
    });
  }, []);
  const add = (x) => {
    axios
      .put(baseurl + "playlist/" + x._id + "?id=" + props.song._id)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      {playlist !== null ? (
        playlist.map((x, i) => {
          if (x.createdBy === uid) {
            return (
              <div
                onClick={() => {
                  add(x);
                }}
                key={i}
              >
                {x.title}
              </div>
            );
          } else console.log("L");
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};
