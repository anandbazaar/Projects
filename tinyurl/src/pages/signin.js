import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import styles from "../style/sign.module.css";
export const Signin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const setInput = (e,c) =>{
    switch(c){
      case 'e':
        setEmail(e.target.value)
        break;
      case 'p':
        setPassword(e.target.value)
        break;
    }
  }

  const login = () =>{
    console.log('logged in')
  }

  return (
    <div className={styles.main}>
      <div className={styles.Sign}>
        <Logo></Logo>
        <h1>Welcome to TinyURL</h1>
        <p>Email</p>
        <input onChange={(e)=>{setInput(e,'e')}}></input>
        <p>password</p>
        <input onChange={(e)=>{setInput(e,'p')}}></input>
        <button onClick={login}>Sign in</button>
        <span>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};
