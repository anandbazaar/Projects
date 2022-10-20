import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
const ToBox = (props) =>{
  return(
    <div>
      <p>{props.text}</p>
      <input onChange={(e)=>{}} type="checkbox" checked={props.isChecked}></input>
      <button id="b" onClick={()=> {document.getElementById("b").parentElement.remove()}}>X</button>
    </div>
  )
}

function App() {
  
  let [a,b] = useState([]);
  let [c,d] = useState("");

  return (
    <div className="App">
      <div className='mainFrame'>
        <div className='inputField'>
          <input value={c} onChange={(e)=>{d(e.target.value)}} placeholder='whats on your mind?'></input>
          <button onClick={
            ()=>{
             b([...a ,{text:c,isChecked:false}])
             d("")
            }
             }>+</button>
        </div>
        {a.map((x,i,a)=>
          <ToBox text={x.text} isChecked={x.isChecked} key={x.text+i} arr={a} index={i}></ToBox>
        )}
      </div>
    </div>
  );
}

export default App;
