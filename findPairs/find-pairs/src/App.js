import './App.css';
import { useEffect, useState } from 'react'

const Card = (props) => {
  if (props.index === props.selected[0]) {
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
  const [c, d] = useState(0);
  const [a, b] = useState([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8])

  document.onkeydown = checkKey;
    function checkKey(e) {
      if (e.keyCode === 32) {
        document.getElementById('blor').style.animation = 'outBlur 1s forwards'

      }
      if (e.keyCode === 38 && c >= 4) {
        // up arrow
        console.log(c)
        d(c - 4)
      }
      else if (e.keyCode === 40 && c<12) {
        // down arrow
        console.log(c)
        d(c + 4)
 
      }
      else if (e.keyCode === 37 && c%4!==0) {
        // left arrow
        console.log(c)
        d(c - 1)

      }
      else if (e.keyCode === 39 && (c!==3 && c!==7 && c!==11 && c!==15)) {
        // right arrow
        console.log(c)
        d(c + 1)

      }
    }




  useEffect(() => {
    function shuffle() {
      b(prev => {
        const a = [...prev]
        console.log(a)
        let currentIndex = a.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [a[currentIndex], a[randomIndex]] = [
            a[randomIndex], a[currentIndex]];
        }

        return a;
      });
    }



    shuffle()
  }, [])








  return (
    <div className="App">
      <div id='blor' className='blor'><p>press 'space' to begin</p></div>
      <div className="box">
        {a.map((x, i) =>
          <Card key={10 * i + Math.floor(Math.random() * 10)} value={x} index={i} selected={[c, d]}></Card>
        )}
      </div>
    </div>
  );

}

export default App;
