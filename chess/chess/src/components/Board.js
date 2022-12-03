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
          if (j === 0) row.push({ piece: <Rook /> });
          else if (j === 5) row.push({ piece: <Rook /> });
          else row.push({ piece: null });
          break;
        case 1:
          row.push({ piece: null });
          break;
        case 6:
          row.push({ piece: null });
          break;
        case 6:
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
  const [board, setBoard] = useState(initBoard());
  const [current, setCurrent] = useState(null);
  const OrderedBoard = [];
  for (let i = 0; i < 8; i++) {
    OrderedBoard.push(
      board[i].map((x, a) => {
        return (
          <Tile
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
      console.log(current[0], current[1]);
    }
  }, [current]);

  return OrderedBoard;
};
