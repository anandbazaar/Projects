import { Tile } from "./Tile";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useTransition } from "react";
import { WKnight, WRook, WBishop, WQueen, WKing, WPawn, Bking, BPawn, BRook, BKnight, BBishop, BQueen } from "./pieces";



const initBoard = () => {

  const board = [];

  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      switch (i) {
        case 0:
          if (j === 0) row.push({ piece: <WRook /> });
          else if (j === 1) row.push({ piece: <WKnight /> });
          else if (j === 2) row.push({ piece: <WBishop /> });
          else if (j === 3) row.push({ piece: <WKing /> });
          else if(j=== 4) row.push({piece: <WQueen/>})
          else if (j === 7) row.push({ piece: <WRook /> });
          else if (j === 6) row.push({ piece: <WKnight /> });
          else if (j === 5) row.push({ piece: <WBishop /> });
          break;
        case 1:
          row.push({ piece: <WPawn/> });
          break;
        case 6:
          row.push({ piece: <BPawn/> });
          break;
        case 7:
          if (j === 0) row.push({ piece: <BRook /> });
          else if (j === 1) row.push({ piece: <BKnight /> });
          else if (j === 2) row.push({ piece: <BBishop /> });
          else if (j === 3) row.push({ piece: <Bking /> });
          else if (j === 7) row.push({ piece: <BRook /> });
          else if (j === 6) row.push({ piece: <BKnight /> });
          else if (j === 5) row.push({ piece: <BBishop /> });
          else if(j=== 4) row.push({piece: <BQueen/>})
          else row.push({ piece: null });
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
  const [enemy, setEnemy] = useState('B')
  const [pos, setPos] = useState([0, 0]);
  const [moveable, setMoveable] = useState([]);
  const [board, setBoard] = useState(initBoard());
  const [current, setCurrent] = useState(null);
  const OrderedBoard = [];
  for (let i = 0; i < 8; i++) {
    OrderedBoard.push(
      board[i].map((x, a) => {
        return (
          <Tile
            enemy = {[enemy,setEnemy]}
            board = {board}
            setPos={setPos}
            moveable={[moveable, setMoveable]}
            setCurrent={[current, setCurrent]}
            key={a}
            row={i}
            index={a}
            piece={x}
          ></Tile>
        );
      })
    );
  }


  const goRight = (x,y,t)=>{
    if(y>7) return
    if(board[x][y].piece !== null) if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goRight(x,y+1,t)
  }
  const goLeft = (x,y,t)=>{
    if(y<0) return
    if(board[x][y].piece !== null) if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goLeft(x,y-1,t)
  }
  const goDown = (x,y,t)=>{
    if(x>7) return
    if(board[x][y].piece !== null) if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goDown(x+1,y,t)
  }
  const goUp = (x,y,t)=>{
    if(x<0) return
    if(board[x][y].piece !== null)if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goUp(x-1,y,t)
  }

  const goUpRight = (x,y,t)=>{
    if(x<0 || y>7) return
    if(board[x][y].piece !== null) if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goUpRight(x-1,y+1,t)
  }
  const goDownRight = (x,y,t)=>{
    if(y>7 || x>7) return
    if(board[x][y].piece !== null) if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goDownRight(x+1,y+1,t)
  }
  const goDownLeft = (x,y,t)=>{
    if(y<0 || x>7) return
    if(board[x][y].piece !== null) if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goDownLeft(x+1,y-1,t)
  }
  const goUpLeft = (x,y,t)=>{
    if(y<0 || x<0) return
    if(board[x][y].piece !== null) if(board[x][y].piece.type.name.slice(0,1) === enemy){t.push([x,y]);return}
    if(board[x][y].piece === null)  t.push([x,y])
    else return
    goUpLeft(x-1,y-1,t)
  }
  const goUpK = (x,y,t) =>{
    if(x<0) return
    if(y<7) if(board[x][y+1].piece === null || board[x][y+1].piece.type.name.slice(0,1) === enemy) t.push([x,y+1])
    if(y>0) if(board[x][y-1].piece === null || board[x][y-1].piece.type.name.slice(0,1) === enemy) t.push([x,y-1])
  }
  const goRightK = (x,y,t) =>{
    if(y > 7) return
    if(x>0) if(board[x-1][y].piece === null || board[x-1][y].piece.type.name.slice(0,1) === enemy) t.push([x-1,y])
    if(x<7) if(board[x+1][y].piece === null || board[x+1][y].piece.type.name.slice(0,1) === enemy) t.push([x+1,y])
  }
  const goDownK = (x,y,t) => {
    if(x > 7) return
    if(y<7) if(board[x][y+1].piece === null || board[x][y+1].piece.type.name.slice(0,1) === enemy) t.push([x,y+1])
    if(y>0) if(board[x][y-1].piece === null || board[x][y-1].piece.type.name.slice(0,1) === enemy) t.push([x,y-1])
  }
  const goLeftK = (x,y,t) =>{
    if(y < 0) return
    if(x>0) if(board[x-1][y].piece === null || board[x-1][y].piece.type.name.slice(0,1) === enemy) t.push([x-1,y])
    if(x<7) if(board[x+1][y].piece === null || board[x+1][y].piece.type.name.slice(0,1) === enemy) t.push([x+1,y])
  }

  const go = (arr,s)=>{
    const temp = []
    goRight(arr[0],arr[1]+1,temp)
    goLeft(arr[0],arr[1]-1,temp)
    goUp(arr[0]-1,arr[1],temp)
    goDown(arr[0]+1,arr[1],temp )
    s(temp)
  }
  const goD = (arr,s)=>{
    const temp = []
    goUpRight(arr[0]-1,arr[1]+1,temp)
    goDownRight(arr[0]+1,arr[1]+1,temp)
    goDownLeft(arr[0]+1,arr[1]-1,temp)
    goUpLeft(arr[0]-1,arr[1]-1,temp)
    s(temp)
  }
  const goK = (arr,s) =>{
    const temp = []
    goUpK(arr[0]-2,arr[1],temp)
    goRightK(arr[0],arr[1]+2,temp)
    goDownK(arr[0]+2,arr[1],temp)
    goLeftK(arr[0],arr[1]-2,temp)
    s(temp)
  }
  const goQ = (arr,s) =>{
    const temp = []
    goRight(arr[0],arr[1]+1,temp)
    goLeft(arr[0],arr[1]-1,temp)
    goUp(arr[0]-1,arr[1],temp)
    goDown(arr[0]+1,arr[1],temp )
    goUpRight(arr[0]-1,arr[1]+1,temp)
    goDownRight(arr[0]+1,arr[1]+1,temp)
    goDownLeft(arr[0]+1,arr[1]-1,temp)
    goUpLeft(arr[0]-1,arr[1]-1,temp)
    s(temp)
  }

  // const checkCastle = (y,temp,i) =>{
  //   if(y<=-1) return
  //   if(board[0][y].piece.type.name === 'WRook' && i-y === 3) temp.push([0,y+1])

  //   checkCastle(y-1,temp,i)

  // }
  const King = (arr,s) =>{
    const [x,y] = arr;
    const temp = []

    if(x>0 && (board[x-1][y].piece === null || board[x-1][y].piece.type.name.slice(0,1) === enemy)) temp.push([x-1,y])
    if(x<7 && (board[x+1][y].piece === null || board[x+1][y].piece.type.name.slice(0,1) === enemy)) temp.push([x+1,y])
    if(y>0 && (board[x][y-1].piece === null || board[x][y-1].piece.type.name.slice(0,1) === enemy)) temp.push([x,y-1])
    if(y<7 && (board[x][y+1].piece === null || board[x][y+1].piece.type.name.slice(0,1) === enemy)) temp.push([x,y+1])
    if(y<7 && x>0 && (board[x-1][y+1].piece === null || board[x-1][y+1].piece.type.name.slice(0,1) === enemy)) temp.push([x-1,y+1])
    if(y<7 && x<7 && (board[x+1][y+1].piece === null || board[x+1][y+1].piece.type.name.slice(0,1) === enemy)) temp.push([x+1,y+1])
    if(y>0 && x>0 && (board[x-1][y-1].piece === null || board[x-1][y-1].piece.type.name.slice(0,1) === enemy)) temp.push([x-1,y-1])
    if(y>0 && x<7 && (board[x+1][y-1].piece === null || board[x+1][y-1].piece.type.name.slice(0,1) === enemy)) temp.push([x+1,y-1])
    s(temp)
  }
  const Pawn = (arr,s)=>{
    const color = arr[0]
    const [x,y] = arr[1]
    const temp = [] 
    if(color === 'WPawn'){
    if(board[x+1][y].piece === null)temp.push ([x+1,y])
    if(y<7) if(board[x+1][y+1].piece !== null ) if(y<7 && x<7 && board[x+1][y+1].piece.type.name.slice(0,1) === 'B') temp.push ([x+1,y+1])
    if(y>0) if(board[x+1][y-1].piece !== null )if(y>0 && x<7 && board[x+1][y-1].piece.type.name.slice(0,1) === 'B') temp.push ([x+1,y-1])
    if(x===1 && board[x+2][y].piece === null) temp.push ([x+2,y]) 
    }
    if(color === 'BPawn'){
    if(board[x-1][y].piece === null)temp.push ([x-1,y])
    if(y<7) if(board[x-1][y+1].piece !== null ) if(y<7 && x>0 && board[x-1][y+1].piece.type.name.slice(0,1) === 'W') temp.push ([x-1,y+1])
    if(y>0) if(board[x-1][y-1].piece !== null )if(y>0 && x>0 && board[x-1][y-1].piece.type.name.slice(0,1) === 'W') temp.push ([x-1,y-1])
    if(x===6 && board[x-2][y].piece === null) temp.push ([x-2,y]) 
    }
    s(temp)
  }
  useEffect(() => {
    if (!current) return;
    switch(current[0]){
      case 'WRook' :
        go(current[1],setMoveable)
        break;
      case 'WBishop':
        goD(current[1],setMoveable)
        break;
      case 'WKnight':
        goK(current[1],setMoveable)
        break;
      case 'WQueen':
        goQ(current[1],setMoveable)
        break;
      case 'WKing' :
        King(current[1],setMoveable)
        break;
      case 'WPawn' :
        Pawn(current,setMoveable)
        break;
      case 'BPawn':
        Pawn(current,setMoveable)
        break;
      case 'Bking':
        King(current[1],setMoveable)
        break;
      case 'BRook':
        go(current[1],setMoveable)
        break;
      case 'BKnight':
        goK(current[1],setMoveable)
        break;
      case 'BBishop':
        goD(current[1],setMoveable)
        break;
      case 'BQueen':
        goQ(current[1],setMoveable)
        break;

    }

  }, [current]);

  return OrderedBoard;
};
