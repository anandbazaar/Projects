import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
const ToDoBox = (props) => {
  console.log(props.isCompleted, 'asdasdasds')

  return (
    <div>
      <p>{props.text}</p>
      <input checked={props.isCompleted} onChange={() => props.arr[1](!props.arr[0][props.index].isCompleted)} type="checkbox"  />
    </div>
  )
}
const addToDo = () => {

}


function App() {
  document.onkeydown = checkKey;
  function checkKey(e){
    console.log(e);
  }
  const [a, b] = useState([]);
  const complete = (ind)=> {

  }
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
        {console.log('asdasdasd')}
      {a.map((x,i) => <ToDoBox key={x.text+i} index={i} text={x.text} isCompleted={x.isCompleted} arr={[a,b]}></ToDoBox>)}

    </div>
  );
}

export default App;


