import styles from '../style/urllist.module.css'
export const UrlList = (props)=>{
    return(
        <div className={styles.urllist}>
            <a href={props.newUrl} className={styles.newurl}>{props.newUrl}</a>
            <a href={props.oldUrl}  className={styles.oldurl}>{props.oldUrl}</a>
        </div>
    )
}