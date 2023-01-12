import { useEffect } from "react";
import axios from "axios";

export const Navigatee = () => {
  const baseurl = "http://localhost:3030/";
  const url = window.location.href.split("/").pop();
  useEffect(() => {
    axios.get(baseurl + "myurl/" + url).then((res) => {
      window.location.href = res.data[0].longUrl;
    });
  }, []);
  return <div>{url}</div>;
};
