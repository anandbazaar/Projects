import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
const ToDoBox = (props) => {
  return (
    <>
      <p>{props.text}</p>
      <input type="checkbox" checked={props.isCompleted} />
    </>
  )
}
const addToDo = () => {

}


function App() {
  const [a, b] = useState([]);

  return (
    <div id='bod' className='main-body'>
      <div className='inputSec'>
        <input id="idput" className='inpot' placeholder='Whats on your mind?'></input>
        <button onClick={
          () => {
            let k = document.getElementById('idput')
            b([...a, { text: k.value, isCompleted: false }]) 
            k.value='';
          }
        }>+</button>
      </div>

      {a.map((x,i) => <ToDoBox key={x.text+i} text={x.text} isCompleted={x.isCompleted}></ToDoBox>)}

    </div>
  );
}

export default App;


