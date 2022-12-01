import { Tile } from "./Tile"
import { v4 as uuidv4 } from "uuid";

export const Board = (props) => {
    const ChessBoard = props.board
    const OrderedBoard = []
    for(let i=0;i<8;i++){
        OrderedBoard.push(ChessBoard[i].map((x,a)=>{
            if((a%2===0 && i%2===0) || (a%2!==0 && i%2!==0)) return <Tile color={"white"} key={uuidv4()} order={x+(i+1)}></Tile>
            if((a%2!==0 && i%2===0) || (a%2===0 && i%2!==0)) return <Tile color={"black"} key={uuidv4()} order={x+(i+1)}></Tile>
            
        }))
    }
    return OrderedBoard;
}