import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
export const AddToPlaylist = () => {
  const baseurl = "http://localhost:3030/";
  const [playlist, setPlaylist] = useState(null);
  useEffect(() => {
    axios.get(baseurl + "playlists").then((res) => {
      setPlaylist(res.data);
      console.log(res.data);
    });
  }, []);
  const add = (x) => {
    console.log(x);
  };
  return (
    <div>
      {playlist !== null ? (
        playlist.map((x, i) => {
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
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};
