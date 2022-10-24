import './App.css';
import { useEffect, useState, useRef } from 'react'

const Card = (props) => {
  if(props.R === true && props.index === props.selected[0]){
    return <div className='card removed card1'>{props.value}</div>
  }
  if(props.R === true){
    return <div className='card removed'>{props.value}</div>
  }
  if(props.S === true){
    return <div className='card normal selected'>{props.value}</div>
  }
  if(props.index === props.selected[0]){
    return <div className='card normal  card1'></div>
  }
  return <div className='card normal'></div>
}

function App() {
  let corr = useRef(0);
  let curr = useRef([]);
  const [i,ic] = useState(0)
  const [c, d] = useState(0);
  const [a, b] = useState([
    {value:1,isS:false,isR:false},
    {value:1,isS:false,isR:false},
    {value:2,isS:false,isR:false},
    {value:2,isS:false,isR:false},
    {value:3,isS:false,isR:false},
    {value:3,isS:false,isR:false},
    {value:4,isS:false,isR:false},
    {value:4,isS:false,isR:false},
    {value:5,isS:false,isR:false},
    {value:5,isS:false,isR:false},
    {value:6,isS:false,isR:false},
    {value:6,isS:false,isR:false},
    {value:7,isS:false,isR:false},
    {value:7,isS:false,isR:false},
    {value:8,isS:false,isR:false},
    {value:8,isS:false,isR:false},
  ])

  if(corr.current === 8){
    document.getElementById('bruh').style.animation = "inBlur 1s forwards"
  }

  document.onkeydown = checkKey;
    function checkKey(e) {
      if(e.keyCode === 13 && a[c].isR===false && c !== curr.current[0] && (i===0 || i===1)){
        a[c].isS = true
        curr.current.push(c);
        ic(i+1)
        if(i === 1){
          if(a[curr.current[0]].value===a[curr.current[1]].value){a[curr.current[0]].isR=true;a[curr.current[1]].isR=true;curr.current=[];corr.current++;ic(0);return;}
          ic(100)
          
          setTimeout(()=>{ a[curr.current[0]].isS=false;a[curr.current[1]].isS=false;curr.current=[];ic(0);return;},1000);
          
        }
      }
      if (e.keyCode === 32) {
        document.getElementById('blor').style.animation = 'outBlur 1s forwards'
      }
      if (e.keyCode === 38 && c >= 4) {
        // up arrow

        d(c - 4)
      }
      else if (e.keyCode === 40 && c<12) {
        // down arrow

        d(c + 4)
 
      }
      else if (e.keyCode === 37 && c%4!==0) {
        // left arrow

        d(c - 1)

      }
      else if (e.keyCode === 39 && (c!==3 && c!==7 && c!==11 && c!==15)) {
        // right arrow

        d(c + 1)

      }
    }




  useEffect(() => {
    function preview(){
      a[curr.current[0]].isS=false;a[curr.current[1]].isS=false;curr.current=[];return;
    }
    function shuffle() {
      b(prev => {
        const a = [...prev]
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
      <div id='bruh' className='blor bruh'>You Win!</div>
      <div className="box">
        {a.map((x, i) =>
          <Card key={10 * i + Math.floor(Math.random() * 10)}  S={x.isS} R={x.isR} value={x.value} index={i} selected={[c, d]}></Card>
        )}
      </div>
    </div>
  );

}

export default App;
