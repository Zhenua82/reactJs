import React, {useState} from "react";
import Button from "./Button";

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
            // alert('Вы не ввели данные')
        }   
    }
    
    return (
        <form className={`${!stateinp ? 'empty' : ''}`}>
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
