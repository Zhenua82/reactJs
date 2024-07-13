// import React from 'react';
// import './SideMenu.css';

// function SideMenu() {
//     return (
//         <div className="side-menu">
//             <ul>
//                 <li>Главная</li>
//                 <li>Вопросы</li>
//                 <li>Объекты исследований</li>
//                 <li>Обстоятельства дела</li>
//                 <li>Приложения</li>
//             </ul>
//         </div>
//     );
// }

// export default SideMenu;


import React from 'react';
import './SideMenu.css'; // Подключение CSS для стилей компонента

function SideMenu() {
    return (
        <div className="side-menu-wrapper">
            <div className="side-menu">
                <ul>
                    <li>Главная</li>
                    <li>Вопросы</li>
                    <li>Объекты исследований</li>
                    <li>Обстоятельства дела</li>
                    <li>Приложения</li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;

