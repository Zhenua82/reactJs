import styles from './PerechData.module.css';

function PerechData(props){
    return(
        <div className={`${styles.perech} ${props.onPassdatas.length === 0 ? styles.pusto : ''}`}>
            {/* <div className={styles.wrap}> {props.onPassdatas} </div>      */}
            <div className={styles.wrap}> 
                {props.onPassdatas.map((el, index) => (<div className={styles.strin} key={index}>{el}</div>))}
            </div>
        </div>
    )
}
export default PerechData