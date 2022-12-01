import styles from "../styles/Tile.module.css";
import { Piece } from "./pieces";

export const Tile = (props) => {
  const { index, piece } = props;

  return (
    <div className={styles.tile}>
      {/* <Piece positions={props.positions} order={props.order}></Piece> */}
    </div>
  );
};
