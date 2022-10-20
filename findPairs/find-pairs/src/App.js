import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
const Card = (props) => {
  if (props.index == props.selected[0]) {
    return (
      <div className='card1'>{props.value}</div>)
  }
  else {
    return (
      <div className='card'>{props.value}</div>
    )
  }
}

function App() {
  let [c, d] = useState(0);
  let [a, b] = useState([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8])

  function shuffle(array, func) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  document.onkeydown = checkKey;

  function checkKey(e) {
    if (e.keyCode == '38') {
      // up arrow
      d(c - 4)
    }
    else if (e.keyCode == '40') {
      // down arrow
      d(c + 4)
    }
    else if (e.keyCode == '37') {
      // left arrow
      d(c - 1)
    }
    else if (e.keyCode == '39') {
      // right arrow
      d(c + 1)
    }
  }


  useEffect(() => {
    shuffle(a, b)
  }, [])


  return (
    <div className="App">
      <div className="box">
        {a.map((x, i) =>
          <Card value={x} index={i} selected={[c, d]}></Card>
        )}
      </div>
    </div>
  );

}

export default App;
