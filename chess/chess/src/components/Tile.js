import { useState } from "react";
import styles from "../styles/Tile.module.css";
import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces";

export const Tile = (props) => {
  let MoveTile = false;
  if (props.moveable[0]) {
    for (let i = 0; i < props.moveable[0].length; i++) {
      if (
        props.moveable[0][i][0] === props.row &&
        props.moveable[0][i][1] === props.index
      ) {
        MoveTile=true
      }
    }
  }

  const choose = () => {
    if(props.piece.piece !== null){
    props.setCurrent[1]([
      props.piece.piece.type.name,
      [props.row, props.index],
    ]);
    return}
    props.moveable[1]([]);
    props.setCurrent[1](null);
  };
  const move = (pos) => {
    switch(props.setCurrent[0][0]){
      case 'Rook' :
        props.piece.piece = <Rook></Rook>
        break;
      case 'Bishop' :
        props.piece.piece = <Bishop></Bishop>
        break;
      case 'Knight' :
        props.piece.piece = <Knight></Knight>
        break;
      case 'Queen' :
        props.piece.piece = <Queen></Queen>
        break;
      case 'King' :
        props.piece.piece = <King></King>
        break;
      case 'Pawn' :
        if(pos[0]===7){
          props.piece.piece = <Queen></Queen>
          break;
        }
        props.piece.piece = <Pawn></Pawn>
        break;
      
    }

    props.board[props.setCurrent[0][1][0]][props.setCurrent[0][1][1]].piece = null
    props.moveable[1]([]);
    props.setCurrent[1](null);
  };
  if (
    (props.row % 2 === 0 && props.index % 2 === 0) ||
    (props.row % 2 !== 0 && props.index % 2 !== 0)
  ) {
    return (
      <div
        onClick={() => (MoveTile ? move([props.row, props.index]) : choose())}
        className={styles.whiteTile}
      >
        {props.piece.piece}
        <div className={MoveTile ? styles.moveTile : null }></div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => (MoveTile ? move([props.row, props.index]) : choose())}
        className={styles.blackTile}
      >
        {props.piece.piece}
        <div className={MoveTile ? styles.moveTile : null }></div>
      </div>
    );
  }
};
