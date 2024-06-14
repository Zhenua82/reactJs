import styles from './Poppup.module.css';
import { createPortal } from 'react-dom';

// function Poppup(props){
//     function close(){
//         props.onClose()
//     }
//     return (
//         <div className={`${props.onPoppup === 1 ? styles.none : styles.fon}`}>
//             <div className={styles.wind}>
//                 <div className={styles.titl}> <span>{props.badEnter}</span></div>
//                 <div className={styles.text}>
//                     <span>{props.secondEnter}</span>
//                     <button onClick={close}>Закрыть</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

//Использование портала (в index.html указываем div с id - куда будем телепортировать компонент):
function BasePoppup(props){
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
function Poppup(props){
    return (
        <>
        {createPortal(<BasePoppup 
        onPoppup={props.onPoppup} //Для пропсов содержимое берем из <Poppup className={styless.none}
        onClose={props.onClose} //onPoppup={pop} onClose={close} badEnter={badEnter} secondEnter={secondEnter}/>
        badEnter = {props.badEnter} //который находится в FormUser.js + учитываем названия в BasePoppup
        secondEnter = {props.secondEnter}/>, 
        document.getElementById('popup'))}
        </>
    )
}
export default Poppup