import { useState } from "react";
import styles from "../styles/Tile.module.css";

export const Tile = (props) => {
  let MoveTile = false;
  if (props.moveable) {
    for (let i = 0; i < props.moveable.length; i++) {
      if (
        props.moveable[i][0] === props.row &&
        props.moveable[i][1] === props.index
      ) {
        MoveTile = true;
      }
    }
  }
  const choose = () => {
    props.setCurrent([props.piece.piece.type.name, [props.row, props.index]]);
  };
  const move = (pos) => {
    props.setPos(pos);
    console.log(pos);
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
