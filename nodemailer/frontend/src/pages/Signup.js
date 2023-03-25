import { useState } from "react";
import axios from "../../node_modules/axios/index";

function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const baseurl = "http://localhost:3030/";
  const signUp = () => {
    const body = {
      username: username,
      pass: pass,
      email: email,
    };
    axios.post(baseurl + "signup", body).then((res) => console.log(res));
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="Email"
      ></input>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
        placeholder="Username"
      ></input>
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        value={pass}
        placeholder="Password"
      ></input>
      <button onClick={signUp}>signup</button>
    </div>
  );
}

export default Signup;
