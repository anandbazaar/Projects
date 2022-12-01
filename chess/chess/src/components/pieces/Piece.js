import { RookImg } from "../../assets";
import styles from "../../styles/Pieces.module.css";
export const Piece = (props) => {
  const [currentPositions, setCurrentPositions] = props.positions;
  const stringConvertion =
    props.order[0].toString() + props.order[1].toString();

  const selected = () => {
    const tempArr = [];
    const temp = { piece: "rook", moves: tempArr };
    for (let i = 0; i < 8; i++) {
      tempArr.push([props.order[0], i]);
      tempArr.push([i, props.order[1]]);
    }
    console.log(temp);
  };

  switch (stringConvertion) {
    case "53":
      return (
        <div onClick={selected} id="Rook" className={styles.Rook}>
          <RookImg />
        </div>
      );
    default:
  }
};
