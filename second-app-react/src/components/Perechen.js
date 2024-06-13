import React, { useState } from 'react';

function Perechen(props) {
    const [items, setItems] = useState([]);
    // Функция для добавления элемента
    const addItem = (item) => {
        setItems([...items, item]);
    };
    // Добавление элемента при рендере компонента
    React.useEffect(() => {
        if (props.addZad) {
            addItem(props.addZad);
        }
    }, [props.addZad]);

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>{item}</div>
                // <div key='44444444'>{item}</div>
            ))}
        </div>
    );
}
export default Perechen;

// import React from 'react';

// function Perechen({ tasks, onDeleteTask }) {
//   return (
//     <div>
//       {tasks.map(task => (
//         <button key={task.id} onClick={() => onDeleteTask(task.id)}>
//           {task.text}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Perechen;
