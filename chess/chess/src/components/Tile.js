import { useState } from "react";
import styles from "../styles/Tile.module.css";
import positions from "./pieces/positions.json";
import { Rook } from "./pieces";

export const Tile = (props) => {
  const goRight = (x,y)=>{
    if(y>=8 || props.piece.piece !== null) return
    if(props.row === x && props.index === y) MoveTile = true
    goRight(x,y+1)
  }
  const goLeft = (x,y)=>{
    if(y<=-1) return
    if(props.row === x && props.index === y) MoveTile = true
    goLeft(x,y-1)
  }
  const goDown = (x,y)=>{
    if(x>=8) return
    if(props.row === x && props.index === y) MoveTile = true
    goDown(x+1,y)
  }
  const goUp = (x,y)=>{
    console.log(x)
    if(x<=-1) return
    if(props.row === x && props.index === y) MoveTile = true
    goUp(x-1,y)
  }

  const go = (arr)=>{
    goRight(arr[0],arr[1]+1)
    goLeft(arr[0],arr[1]-1)
    goUp(arr[0]-1,arr[1])
    goDown(arr[0]+1,arr[1])
  }
  let MoveTile = false;
  if (props.moveable[0]) {
    // for (let i = 0; i < props.moveable[0].length; i++) {
    //   if (
    //     props.moveable[0][i][0] === props.row &&
    //     props.moveable[0][i][1] === props.index
    //   ) {
        go(props.setCurrent[0][1])
    //   }
    // }
    

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
