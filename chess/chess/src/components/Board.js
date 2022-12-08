import { Tile } from "./Tile";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useTransition } from "react";
import { Rook } from "./pieces";

const initBoard = () => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      switch (i) {
        case 0:
          if (j === 0) row.push({ piece: <Rook id="WR1" /> });
          else row.push({ piece: null });
          break;
        case 1:
          row.push({ piece: null });
          break;
        case 6:
          row.push({ piece: null });
          break;
        case 7:
          row.push({ piece: null });
          break;
        default:
          row.push({ piece: null });
          break;
      }
    }
    board.push(row);
  }

  return board;
};

export const Board = (props) => {
  const [pos, setPos] = useState([0, 0]);
  const [moveable, setMoveable] = useState(null);
  const [board, setBoard] = useState(initBoard());
  const [current, setCurrent] = useState(null);
  const OrderedBoard = [];
  for (let i = 0; i < 8; i++) {
    OrderedBoard.push(
      board[i].map((x, a) => {
        return (
          <Tile
            setPos={setPos}
            moveable={moveable}
            setCurrent={setCurrent}
            key={a}
            row={i}
            index={a}
            piece={x}
          ></Tile>
        );
      })
    );
  }

  useEffect(() => {
    if (!current) return;
    if (current[0] === "Rook") {
      const [CurrentPosX, CurrentPosY] = current[1];
      const tempMove = [];
      for (let x = 0; x < 8; x++) {
        if (x !== CurrentPosY) tempMove.push([CurrentPosX, x]);
        if (x !== CurrentPosX) tempMove.push([x, CurrentPosY]);
      }
      setMoveable(tempMove);
      console.log(pos);
    }
  }, [current]);

  return OrderedBoard;
};
