import { useState } from "react";
import styles from "../styles/Tile.module.css";
import positions from "./pieces/positions.json";
import { Rook } from "./pieces";

export const Tile = (props) => {
  let MoveTile = false;
  if (props.moveable[0]) {
    console.log(props.moveable[0]);
    for (let i = 0; i < props.moveable[0].length; i++) {
      if (
        props.moveable[0][i][0] === props.row &&
        props.moveable[0][i][1] === props.index &&
        props.piece.piece === null
      ) {
        MoveTile = true;
      }
    }
  }

  const choose = () => {
    if (props.setCurrent[0] !== null) return;
    props.setCurrent[1]([
      props.piece.piece.type.name,
      [props.row, props.index],
    ]);
    props.piece.piece = null;
  };
  const move = (pos) => {
    positions.W1rook = pos;
    console.log(positions.W1rook);
    props.piece.piece = <Rook></Rook>;
    props.moveable[1](null);
    props.setCurrent[1](null);
  };
  if (
    (props.row % 2 === 0 && props.index % 2 === 0) ||
    (props.row % 2 !== 0 && props.index % 2 !== 0)
  ) {
    return (
      <div
        onClick={() => (MoveTile ? move([props.row, props.index]) : choose())}
        className={MoveTile ? styles.moveableTile : styles.whiteTile}
      >
        {props.piece.piece}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => (MoveTile ? move([props.row, props.index]) : choose())}
        className={MoveTile ? styles.moveableTile : styles.blackTile}
      >
        {props.piece.piece}
      </div>
    );
  }
};
