import Button from "./components/Button";
import Forma from "./components/Forma";
import Perechen from "./components/Perechen";
import React, {useState} from "react";

function App() {
  const [zad, setZad] = useState([
    <Button onClick={del} key = {Date.now() + 0}>"Создание курса - 1 час"</Button>,
    <Button onClick={del} key = {Date.now() + 1}>"Разминка 15 мин"</Button>,
    <Button onClick={del} key = {Date.now() + 2}>"Создание 2 курса - 1.5 час"</Button>,
  ]);
  function ZadachaHandler(zad){
    // setZad(<button onClick={del}>{zad}</button>)
    setZad(<Button type='button' onClick={del}>{zad}</Button>)
  };

  function del(event){
    event.preventDefault();
    event.target.id = Date.now();
    const buttonToRemove = document.getElementById(event.target.id);
    if (buttonToRemove) {
        buttonToRemove.remove();
    }
  };

  return (
  <> 
   <div className="commun">
    <div className="obertka_form"><Forma onZadachaHandler = {ZadachaHandler}/></div>
    <div className="perech"><Perechen addZad = {zad}/></div>
   </div>
  </>)
}
export default App;

// import React, { useState } from "react";
// import Forma from "./components/Forma";
// import Perechen from "./components/Perechen";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   function addTask(task) {
//     setTasks([...tasks, { id: Date.now(), text: task }]);
//   }

//   function deleteTask(taskId) {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   }

//   return (
//     <> 
//       <div>
//         <Forma onAddTask={addTask} />
//       </div>
//       <div>
//         <Perechen tasks={tasks} onDeleteTask={deleteTask} />
//       </div>
//     </>
//   );
// }

// export default App;