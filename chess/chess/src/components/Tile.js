import { useState } from "react";
import styles from "../styles/Tile.module.css";
import { WBishop, Bking, WKing, WKnight, WPawn, WQueen, WRook, BPawn, BRook, BKnight, BBishop, BQueen } from "./pieces";

export const Tile = (props) => {
  let MoveTile = false;
  let capturable = false
  if (props.moveable[0]) {
    for (let i = 0; i < props.moveable[0].length; i++) {
      if (
        props.moveable[0][i][0] === props.row &&
        props.moveable[0][i][1] === props.index
      ) {
        MoveTile=true
      }
      if(props.moveable[0][i][0] === props.row &&
        props.moveable[0][i][1] === props.index &&
        props.piece.piece !== null) {
          capturable=true
        }
    }
  }

  const choose = () => {
    if(props.piece.piece !== null){
      if(props.piece.piece.type.name.slice(0,1) === props.enemy[0]) return
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
      case 'WRook' :
        props.piece.piece = <WRook/>
        break;
      case 'BRook' :
        props.piece.piece = <BRook/>
        break;
      case 'WBishop' :
        props.piece.piece = <WBishop/>
        break;
      case 'BBishop' :
        props.piece.piece = <BBishop/>
        break;
      case 'WKnight' :
        props.piece.piece = <WKnight/>
        break;
      case 'BKnight':
        props.piece.piece = <BKnight/>
        break;
      case 'WQueen' :
        props.piece.piece = <WQueen/>
        break;
      case 'BQueen':
        props.piece.piece = <BQueen/>
        break
      case 'WKing' :
        props.piece.piece = <WKing/>
        break;
      case 'Bking' :
        props.piece.piece = <Bking/>
        break;
      case 'WPawn' :
        if(pos[0]===7){
          props.piece.piece = <WQueen/>
          break;
        }
        props.piece.piece = <WPawn/>
        break;
      case 'BPawn' :
        if(pos[0]===0){
          props.piece.piece = <WQueen/>
          break;
        }
          props.piece.piece = <BPawn/>
          break;
      
    }

    if(props.enemy[0]==='B') props.enemy[1]('W')
    else if(props.enemy[0]==='W') props.enemy[1]('B')
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
        <div className={capturable ? styles.eatTile : MoveTile ? styles.moveTile : null }></div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => (MoveTile ? move([props.row, props.index]) : choose())}
        className={styles.blackTile}
      >
        {props.piece.piece}
        <div className={capturable ? styles.eatTile : MoveTile ? styles.moveTile : null }></div>
      </div>
    );
  }
};
