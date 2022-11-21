import { useContext, useRef, useState } from "react"
import styles from "../styles/Dj.module.css"
import { HiddenContext } from "./Context";
import { ProgressBar } from "./ProgressBar";
export const Dj = (props) => {
    const  [isPlaying,changePlaying] = useState(false)
    const { hidden, changeState } = useContext(HiddenContext);
    const sideBar = useRef();
    const But = useRef();
    return(
        <div ref={sideBar} className={styles.hidden}>
            <button ref={But} className={hidden === true ? styles.sideBarClosed : styles.sideBarOpened} onClick={()=>{
                
                console.log(sideBar.current.className)
                   if(sideBar.current.className === 'Dj_hidden__f3LVJ'){
                    changeState();
                    sideBar.current.className = styles.exposed
                    props.back.current.className = 'App_innerBack__yeCog'
                    props.back.current.style.backgroundImage = "url('https://i.ytimg.com/vi/K09_5IsgGe8/maxresdefault.jpg')";
                    return           
                   }
                   if(sideBar.current.className === 'Dj_exposed__bDD+s'){
                    changePlaying(!isPlaying)
                    But.current.style.animationPlayState =  !isPlaying ? 'running' : 'paused'
                   }
            }}>
                
                <div className={hidden === true ? styles.innerClosed : styles.innerOpened}>
                    <img className={styles.songCover} src={props.songImg}></img>
                    <div className={styles.pin}></div>
                </div>
               
            </button>
            <p className={styles.title}>{props.songTitle}</p>
            <ProgressBar play={[isPlaying,changePlaying]} ch={sideBar}></ProgressBar>
            <div className={styles.control}>
                <button style={{backgroundColor:"transparent",border:"none",}}><i className="fa fa-pause" style={{fontSize: "20px",color:"white"}}></i></button>
            </div>
        </div>
    )
}