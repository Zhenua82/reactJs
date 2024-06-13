import styles from './Poppup.module.css';

function Poppup(props){
   
    function close(){
        props.onClose()
    }
    return (
        <div className={`${props.onPoppup === 1 ? styles.none : styles.fon}`}>
            <div className={styles.wind}>
                <div className={styles.titl}> <span>{props.badEnter}</span></div>
                <div className={styles.text}>
                    <span>{props.secondEnter}</span>
                    <button onClick={close}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}
export default Poppup