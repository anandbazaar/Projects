import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';


const ToBox = (props) =>{
  const [todos, setTodos] = props.arr;

  const handleCheck = () => {
    let newTodos = todos.map((todo, index) => {
      console.log(todo, 'todo')
      todo = {...todo, isChecked: !todo.isChecked}

    });

    setTodos(newTodos)

    
  }

  return(
    <div>
      <p>{props.text}</p>
      {console.log(todos)}
      <input onChange={(e)=> handleCheck()} type="checkbox" checked={props.isChecked}></input>
      <button id="b" onClick={()=> {document.getElementById("b").parentElement.remove()}}>X</button>
    </div>
  )
}

function App() {
  // const complete(ind){

  // }
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
        {a.map((x,i)=>
          <ToBox text={x.text} isChecked={x.isChecked} key={x.text+i} arr={[a,b]} index={i}></ToBox>
        )}
      </div>
    </div>
  );
}

export default App;
