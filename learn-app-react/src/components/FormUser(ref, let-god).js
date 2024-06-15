import styles from './FormUser.module.css';
import React, {useState, useRef} from 'react';
import Poppup from './Poppup(portal)';
import styless from './Poppup.module.css';

function FormUser(props){
    //Функция для определения "лет", "год", "года":
    function getFormattedData(namee, age) {
        let ageSuffix = '';
        if (age % 10 === 1 && age % 100 !== 11) {
            ageSuffix = 'год';
        } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
            ageSuffix = 'года';
        } else {
            ageSuffix = 'лет';
        }
        return `${namee} - ${age} ${ageSuffix}`;
    };

//С использованием useState:
    // const[namee, setNamee] = useState('');
    // const[age, setAge] = useState('');
    // const[pop, setPop]=useState(1);
    // const[badEnter, setBadenter]=useState('');
    // const[secondEnter, setSecondEnter]=useState('');

    // function nameHandler(event){
    //     setNamee(event.target.value)
    // }
    // function ageHandler(event){
    //     setAge(event.target.value)
    // }
    // function adduserHandler(event){
    //     event.preventDefault();
    //     setNamee('')
    //     setAge('')
    //     if (namee.trim() !== '' && age.trim() !== '' && age > 0) {
    //         let datas = getFormattedData(namee, age)
    //         props.onGetdatas(datas)
    //     } else if (namee.trim() !== '' && age.trim() !== '' && age <= 0){
    //         setBadenter('Heкорректный возраст')
    //         setSecondEnter('Возраст должен быть больше 0')
    //         setPop(0)
    //     }
    //     else {
    //         setBadenter('Heкорректный ввод')
    //         setSecondEnter('Эти поля не могут быть пустыми')
    //         setPop(0)
    //     }
    // }
    // function close(){
    //     setPop(1)
    // }
    // return (
    //     <> 
    //         <form onSubmit={adduserHandler}>
    //             <div className={styles.wrap}>
    //                 <label htmlFor='name'>Имя</label>
    //                 <input id='name' value={namee} onChange={nameHandler} type="text"></input>
    //                 <label htmlFor='age'>Возраст</label>
    //                 <input id='age' value={age} onChange={ageHandler} type="number"></input>
    //                 <button type="submit">Добавить пользователя</button>
    //             </div>
    //         </form>
    //         <Poppup className={styless.none} onPoppup={pop} onClose={close} badEnter={badEnter} secondEnter={secondEnter}/>
    //     </>
    // )

// С использованием ref:
    const namee = useRef();
    const age = useRef();
    const[pop, setPop]=useState(1);
    const[badEnter, setBadenter]=useState('');
    const[secondEnter, setSecondEnter]=useState('');

    function adduserHandler(event){
        event.preventDefault();
        if (namee.current.value.trim() !== '' && age.current.value.trim() !== '' && age.current.value > 0) {
            let datas = getFormattedData(namee.current.value, age.current.value)
            props.onGetdatas(datas)
        } else if (namee.current.value.trim() !== '' && age.current.value.trim() !== '' && age.current.value <= 0){
            setBadenter('Heкорректный возраст')
            setSecondEnter('Возраст должен быть больше 0')
            setPop(0)
        }
        else {
            setBadenter('Heкорректный ввод')
            setSecondEnter('Эти поля не могут быть пустыми')
            setPop(0)
        };
        namee.current.value='';
        age.current.value='';
    }
    function close(){
        setPop(1)
    }
    return (
        <> 
            <form onSubmit={adduserHandler}>
                <div className={styles.wrap}>
                    <label htmlFor='name'>Имя</label>
                    <input ref={namee} id='name' type="text"></input>
                    <label htmlFor='age'>Возраст</label>
                    <input ref={age} id='age' type="number"></input>
                    <button type="submit">Добавить пользователя</button>
                </div>
            </form>
            <Poppup className={styless.none} onPoppup={pop} onClose={close} badEnter={badEnter} secondEnter={secondEnter}/>
        </>
    )

}
export default FormUser