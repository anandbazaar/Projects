import { Tile } from "./Tile";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const initBoard = () => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push({ piece: "rook" });
    }
    board.push(row);
  }

  return board;
};

export const Board = (props) => {
  const [board, setBoard] = useState(initBoard());
  const [current, setCurrent] = useState(null);
  const [currentPositions, setCurrentPositions] = useState([]);

  // const OrderedBoard = [];

  // for (let i = 0; i < 8; i++) {
  //   OrderedBoard.push(
  //     ChessBoard[i].map((x, a) => {
  //       if ((a % 2 === 0 && i % 2 === 0) || (a % 2 !== 0 && i % 2 !== 0))
  //         return (
  //           <Tile
  //             positions={[currentPositions, setCurrentPositions]}
  //             color={"white"}
  //             key={uuidv4()}
  //             order={[i, a]}
  //           ></Tile>
  //         );
  //       if ((a % 2 !== 0 && i % 2 === 0) || (a % 2 === 0 && i % 2 !== 0))
  //         return (
  //           <Tile
  //             positions={[currentPositions, setCurrentPositions]}
  //             color={"black"}
  //             key={uuidv4()}
  //             order={[i, a]}
  //           ></Tile>
  //         );
  //     })
  //   );
  // }

  useEffect(() => {
    if (!current) return;
  }, [current]);

  return (
    <>
      {board.flat().map((cell, index) => (
        <Tile key={index} index={index} {...cell} />
      ))}
    </>
  );
};
