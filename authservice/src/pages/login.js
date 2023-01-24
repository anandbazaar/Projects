import axios from "axios";
import { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const baseurl = "http://localhost:3030/";

  //   useEffect(() => {
  //     const res = axios.get(baseurl + "data", {
  //       headers: { token },
  //     });
  //     console.log(res);
  //   }, []);

  const login = () => {
    const body = {
      email: email,
      pass: pass,
    };
    axios.post(baseurl, body).then((res) => {
      localStorage.setItem("user", res.data);
      console.log(localStorage.getItem("user"));
    });
  };
  return (
    <div>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
      ></input>
      <input
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="password"
      ></input>
      <button onClick={login}>login</button>
    </div>
  );
};
