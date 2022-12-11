import { Tile } from "./Tile";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useTransition } from "react";
import { Knight, Rook, Bishop, Queen, King, Pawn } from "./pieces";



const initBoard = () => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      switch (i) {
        case 0:
          if (j === 0) row.push({ piece: <Rook /> });
          else if (j === 1) row.push({ piece: <Knight /> });
          else if (j === 2) row.push({ piece: <Bishop /> });
          else if (j === 3) row.push({ piece: <King /> });
          else if(j=== 4) row.push({piece: <Queen></Queen>})
          else if (j === 7) row.push({ piece: <Rook /> });
          else if (j === 6) row.push({ piece: <Knight /> });
          else if (j === 5) row.push({ piece: <Bishop /> });
          break;
        case 1:
          row.push({ piece: <Pawn></Pawn> });
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
  const [moveable, setMoveable] = useState([]);
  const [board, setBoard] = useState(initBoard());
  const [current, setCurrent] = useState(null);
  const OrderedBoard = [];
  for (let i = 0; i < 8; i++) {
    OrderedBoard.push(
      board[i].map((x, a) => {
        return (
          <Tile
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
    if(y>=8 || board[x][y].piece !== null) return
    t.push([x,y])
    goRight(x,y+1,t)
  }
  const goLeft = (x,y,t)=>{
    if(y<=-1 || board[x][y].piece !== null) return
    t.push([x,y])
    goLeft(x,y-1,t)
  }
  const goDown = (x,y,t)=>{
    if(x>=8 || board[x][y].piece !== null) return
    t.push([x,y])
    goDown(x+1,y,t)
  }
  const goUp = (x,y,t)=>{
    if(x<=-1 || board[x][y].piece !== null) return
    t.push([x,y])
    goUp(x-1,y,t)
  }

  const goUpRight = (x,y,t)=>{
    if(y>=8 || x<=-1 || board[x][y].piece !== null) return
    t.push([x,y])
    goUpRight(x-1,y+1,t)
  }
  const goDownRight = (x,y,t)=>{
    if(y>=8 || x>=8 || board[x][y].piece !== null) return
    t.push([x,y])
    goDownRight(x+1,y+1,t)
  }
  const goDownLeft = (x,y,t)=>{
    if(y<=-1 || x>=8 || board[x][y].piece !== null) return
    t.push([x,y])
    goDownLeft(x+1,y-1,t)
  }
  const goUpLeft = (x,y,t)=>{
    if(y<=-1 || x<=-1 || board[x][y].piece !== null) return
    t.push([x,y])
    goUpLeft(x-1,y-1,t)
  }
  const goUpK = (x,y,t) =>{
    if(x<0) return
    if(y<7) if(board[x][y+1].piece === null) t.push([x,y+1])
    if(y>0) if(board[x][y-1].piece === null) t.push([x,y-1])
  }
  const goRightK = (x,y,t) =>{
    if(y > 7) return
    if(x>0) if(board[x-1][y].piece === null) t.push([x-1,y])
    if(x<7) if(board[x+1][y].piece === null) t.push([x+1,y])
  }
  const goDownK = (x,y,t) => {
    if(x > 7) return
    if(y<7) if(board[x][y+1].piece === null) t.push([x,y+1])
    if(y>0) if(board[x][y-1].piece === null) t.push([x,y-1])
  }
  const goLeftK = (x,y,t) =>{
    if(y < 0) return
    if(x>0) if(board[x-1][y].piece === null) t.push([x-1,y])
    if(x<7) if(board[x+1][y].piece === null) t.push([x+1,y])
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


  const King = (arr,s) =>{
    const [x,y] = arr;
    const temp = []
    if(x>0 && board[x-1][y].piece === null) temp.push([x-1,y])
    if(x<7 && board[x+1][y].piece === null) temp.push([x+1,y])
    if(y>0 && board[x][y-1].piece === null) temp.push([x,y-1])
    if(y<7 && board[x][y+1].piece === null) temp.push([x,y+1])
    if(y<7 && x>0 && board[x-1][y+1].piece === null) temp.push([x-1,y+1])
    if(y<7 && x<7 && board[x+1][y+1].piece === null) temp.push([x+1,y+1])
    if(y>0 && x>0 && board[x-1][y-1].piece === null) temp.push([x-1,y-1])
    if(y>0 && x<7 && board[x+1][y-1].piece === null) temp.push([x+1,y-1])
    s(temp)
  }
  const Pawn = (arr,s)=>{
    const [x,y] = arr;
    const temp = []
    if(x===7){board[x][y].piece = <Queen></Queen>; return}
    if(board[x+1][y].piece === null)temp.push ([x+1,y]) 
    if(x===1 && board[x+2][y].piece === null) temp.push ([x+2,y]) 
    s(temp)
  }
  useEffect(() => {
    if (!current) return;
    switch(current[0]){
      case 'Rook' :
        go(current[1],setMoveable)
        break;
      case 'Bishop':
        goD(current[1],setMoveable)
        break;
      case 'Knight':
        goK(current[1],setMoveable)
        break;
      case 'Queen':
        goQ(current[1],setMoveable)
        break;
      case 'King' :
        King(current[1],setMoveable)
        break;
      case 'Pawn' :
        Pawn(current[1],setMoveable)
        break;
    }

  }, [current]);

  return OrderedBoard;
};
