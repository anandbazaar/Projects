import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//array
let data = [
  { name: "anand", number: "80557104" },
  { name: "enand", number: "80657104" },
  { name: "ynand", number: "80757104" },
  { name: "unand", number: "80857104" },
  { name: "inand", number: "80957104" },
  { name: "onand", number: "80007104" },
]

//component
const Contact = (props) => {
  let [a,b] = useState(0);
  const add = ()=>{
    b(a+1);
  }

  return (
    <div className="H">
      <h1 className="J">{props.name}</h1>
      <h2 className="K">{props.number}</h2>
      <p>{a}</p>
      <button onClick={add}>click</button>
    </div>
  )
}

//renderer
function App() {
  return (
    <div className="App">
      {data.map((x, i) =>
        <Contact key={x.name +i} name={x.name} number={x.number}></Contact>
      )}
    </div>
  );
}

export default App;
