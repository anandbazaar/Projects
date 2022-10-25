import "./App.css";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Card = (props) => {
  return props.R === true && props.index === props.selected[0] ? (
    <div className="card removed card1">{props.value}</div>
  ) : props.R === true ? (
    <div className="card removed">{props.value}</div>
  ) : props.S === true ? (
    <div className="card normal selected">{props.value}</div>
  ) : props.index === props.selected[0] ? (
    <div className="card normal card1"></div>
  ) : (
    <div className="card normal"></div>
  );
};

function App() {
  let correctlyGuessed = useRef(0);
  let Selections = useRef([]);
  const [selectionCounter, selectionCounterChanger] = useState(0);
  const [hovered, hoveredChanger] = useState(0);
  const [cards, cardsChanger] = useState([
    { value: 1, isSelected: false, isRemoved: false },
    { value: 1, isSelected: false, isRemoved: false },
    { value: 2, isSelected: false, isRemoved: false },
    { value: 2, isSelected: false, isRemoved: false },
    { value: 3, isSelected: false, isRemoved: false },
    { value: 3, isSelected: false, isRemoved: false },
    { value: 4, isSelected: false, isRemoved: false },
    { value: 4, isSelected: false,   },
    { value: 5, isSelected: false, isRemoved: false },
    { value: 5, isSelected: false, isRemoved: false },
    { value: 6, isSelected: false, isRemoved: false },
    { value: 6, isSelected: false, isRemoved: false },
    { value: 7, isSelected: false, isRemoved: false },
    { value: 7, isSelected: false, isRemoved: false },
    { value: 8, isSelected: false, isRemoved: false },
    { value: 8, isSelected: false, isRemoved: false },
  ]);

  if (correctlyGuessed.current === 8) {
    document.getElementById("bruh").style.animation = "inBlur 1s forwards";
  }

  document.onkeydown = checkKey;
  function checkKey(e) {
    if (
      e.keyCode === 13 &&
      cards[hovered].isRemoved === false &&
      hovered !== Selections.current[0] &&
      (selectionCounter === 0 || selectionCounter === 1)
    ) {
      cards[hovered].isSelected = true;
      Selections.current.push(hovered);
      selectionCounterChanger(selectionCounter + 1);
      if (selectionCounter === 1) {
        if (
          cards[Selections.current[0]].value ===
          cards[Selections.current[1]].value
        ) {
          cards[Selections.current[0]].isRemoved = true;
          cards[Selections.current[1]].isRemoved = true;
          Selections.current = [];
          correctlyGuessed.current++;
          selectionCounterChanger(0);
          return;
        }
        selectionCounterChanger(100);

        setTimeout(() => {
          cards[Selections.current[0]].isSelected = false;
          cards[Selections.current[1]].isSelected = false;
          Selections.current = [];
          selectionCounterChanger(0);
          return;
        }, 1000);
      }
    }
    if (e.keyCode === 32) {
      document.getElementById("blor").style.animation = "outBlur 1s forwards";
    }
    if (e.keyCode === 38 && hovered >= 4) {
      // up arrow

      hoveredChanger(hovered - 4);
    } else if (e.keyCode === 40 && hovered < 12) {
      // down arrow

      hoveredChanger(hovered + 4);
    } else if (e.keyCode === 37 && hovered % 4 !== 0) {
      // left arrow

      hoveredChanger(hovered - 1);
    } else if (
      e.keyCode === 39 &&
      hovered !== 3 &&
      hovered !== 7 &&
      hovered !== 11 &&
      hovered !== 15
    ) {
      // right arrow

      hoveredChanger(hovered + 1);
    }
  }

  useEffect(() => {
    function shuffle() {
      cardsChanger((prev) => {
        const cards = [...prev];
        let currentIndex = cards.length,
          randomIndex;

        // While there remain elements to shuffle. 
        while (currentIndex !== 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [cards[currentIndex], cards[randomIndex]] = [
            cards[randomIndex],
            cards[currentIndex],
          ];
        }

        return cards;
      });
    }

    shuffle();
  }, []);

  return (
    <div className="App">
      <div id="blor" className="blor">
        <p>press 'space' to begin</p>
      </div>
      <div id="bruh" style={{}} className="blor bruh">
        You Win!
      </div>
      <div className="bigFrame"><p>player1:</p><p>player2:</p></div>
      <div className="box">
        {cards.map((x, i) => (
          <Card
            key={uuidv4()}
            S={x.isSelected}
            R={x.isRemoved}
            value={x.value}
            index={i}
            selected={[hovered, hoveredChanger]}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
