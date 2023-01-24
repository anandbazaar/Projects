import axios from "axios";
import { useEffect, useState } from "react";
export const Data = () => {
  const baseurl = "http://localhost:3030/";
  useEffect(() => {
    const token = localStorage.getItem("user");
    const res = axios.get(baseurl + "data", {
      headers: {
        authorization: token,
      },
    });
    console.log(res);
  }, []);
  return <div>hello</div>;
};
