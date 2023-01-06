import { useState } from "react";
import axios from "../../node_modules/axios/index";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseurl = "http://localhost:3030/";
  const register = () => {
    const user = {
      username: username,
      password: password,
    };
    axios.post(baseurl + "users", user).then((res) => {
      console.log(res);
      navigate("/login");
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
      <button onClick={register}>Signup</button>
    </div>
  );
};
