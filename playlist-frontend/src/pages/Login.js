import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../node_modules/axios/index";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseurl = "http://localhost:3030/";
  const login = () => {
    const user = {
      username: username,
      password: password,
    };
    axios.post(baseurl + "login", user).then((res) => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("password", res.data.password);
      localStorage.setItem("uid", res.data._id);
      navigate("/playlist");
    });
  };
  return (
    <div>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      ></input>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      ></input>
      <button onClick={login}>login</button>
    </div>
  );
};
