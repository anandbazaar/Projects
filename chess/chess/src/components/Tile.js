import styles from "../styles/Tile.module.css"
export const Tile = (props) =>{
    if(props.color === 'black') return(<div className={styles.blackTile}>{props.order}</div>)
    if(props.color === 'white')return(<div className={styles.whiteTile}>{props.order}</div>)
}