import { useState } from "react";
import styles from "../styles/Tile.module.css";

export const Tile = (props) => {
  if (
    (props.row % 2 === 0 && props.index % 2 === 0) ||
    (props.row % 2 !== 0 && props.index % 2 !== 0)
  ) {
    return (
      <div
        onClick={() => {
          props.setCurrent([
            props.piece.piece.type.name,
            [props.row, props.index],
          ]);
          // console.log(props.piece.piece.type.name, props.row, props.index);
        }}
        className={styles.whiteTile}
      >
        {props.piece.piece}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          props.setCurrent([
            props.piece.piece.type.name,
            [props.row, props.index],
          ]);
          // console.log(props.piece.piece.type.name, props.row, props.index);
        }}
        className={styles.blackTile}
      >
        {props.piece.piece}
      </div>
    );
  }
};
