import React, {useState} from "react";
import Button from "./Button";
// import styled from "styled-components";
import styles from './Forma.module.css';

// const FormStyle = styled.form`
// width: 80%; 
// & label{
//   font-weight: 700;
// }
// & input{
//   display: block;
//   width: 100%;
//   height: 24px;
//   margin-top: 10px;
// }
// & button{
//   margin-top: 10px;
//   padding: 10px 20px;
// }
// &.empty label{
//   color: red;
// }
// &.empty input{
//   border-color: red;
//   background-color: yellow;
// }
// `;

// const FormStyle = styled.form`
// width: 80%; 
// & label{
//   color: ${(props) => (props.emptyy ? 'red' : 'black')};
//   font-weight: 700;
// }
// & input{
//   display: block;
//   width: 100%;
//   height: 24px;
//   margin-top: 10px;
//   border-color: ${(props) => (props.emptyy ? 'red' : 'black')};
//   background-color: ${(props) => (props.emptyy ? 'pink' : 'transparent')};
// }
// & button{
//   margin-top: 10px;
//   padding: 10px 20px;
// }
// `;

function Forma(props){
    let[zadacha, setZadacha] = useState('');
    const[stateinp, setStateinp] = useState(true);

    function zadachaHandler(event){
        if (event.target.value.trim() !== ''){
            setStateinp(true)
        };
        setZadacha(event.target.value)
    };

    function addHandler(event){
        event.preventDefault();
        setZadacha('');
        if (zadacha.trim() !== ''){
            props.onZadachaHandler(zadacha)
        } else {
            setStateinp(false)
        }   
    }
    
    return (
        <form className={`${!stateinp ? styles.empty : styles.form}`}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label 
                    // style={{ color: stateinp ? 'black' : 'red' }}
                    >Задачи</label>
                    <input
                    // style={{borderColor: 'black' : 'red', 
                    //     'background-color': stateinp ? 'transparent' : 'yellow'}}
                    type="text"
                    onChange={zadachaHandler}
                    value={zadacha}/>
                </div>   
                <div className='new-cost__actions'>
                    <Button type="submit" onClick={addHandler}>Добавить задачу</Button>
                </div>
            </div>
        </form>

        // <form className={`${!stateinp ? 'empty' : ''}`}>
        //     <div className='new-cost__controls'>
        //         <div className='new-cost__control'>
        //             <label 
        //             // style={{ color: stateinp ? 'black' : 'red' }}
        //             >Задачи</label>
        //             <input
        //             // style={{borderColor: 'black' : 'red', 
        //             //     'background-color': stateinp ? 'transparent' : 'yellow'}}
        //             type="text"
        //             onChange={zadachaHandler}
        //             value={zadacha}/>
        //         </div>   
        //         <div className='new-cost__actions'>
        //             <Button type="submit" onClick={addHandler}>Добавить задачу</Button>
        //         </div>
        //     </div>
        // </form>

        // // <FormStyle className={`${!stateinp ? 'empty' : ''}`}>
        // // <FormStyle empty={`${stateinp}`}>
        // <FormStyle emptyy={!stateinp}>
        //     <div className='new-cost__controls'>
        //         <div className='new-cost__control'>
        //             <label 
        //             >Задачи</label>
        //             <input
        //             type="text"
        //             onChange={zadachaHandler}
        //             value={zadacha}/>
        //         </div>   
        //         <div className='new-cost__actions'>
        //             <Button type="submit" onClick={addHandler}>Добавить задачу</Button>
        //         </div>
        //     </div>
        // </FormStyle>
    )
}
export default Forma

// import React, { useState } from "react";

// function Forma({ onAddTask }) {
//   const [task, setTask] = useState('');

//   function handleTaskChange(event) {
//     setTask(event.target.value);
//   }

//   function handleAddTask(event) {
//     event.preventDefault();
//     if (task.trim()) {
//       onAddTask(task);
//       setTask('');
//     }
//   }

//   return (
//     <form onSubmit={handleAddTask}>
//       <div className='new-cost__controls'>
//         <div className='new-cost__control'>
//           <label>Задачи</label>
//           <input
//             type="text"
//             onChange={handleTaskChange}
//             value={task}
//           />
//         </div>
//         <div className='new-cost__actions'>
//           <button type="submit">Добавить задачу</button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default Forma;
