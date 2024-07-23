import React from 'react';
import './SideMenu.css'; // Подключение CSS для стилей компонента

import { useSelector, useDispatch } from 'react-redux';
import { dopPovrezhdenia } from '../store/index';

function SideMenu() {
    const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
    const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    // const ushibRanaOgr = useSelector((state) => state.ushibRanaOgr);
    // const ushibRanaNoogr = useSelector((state) => state.ushibRanaNoogr);
    const dispatchFunction = useDispatch();
    function changeStatusHandler(type){
        // if (type === 'ushibRanaOgr') {
        //     dispatchFunction({type: 'ushibRanaOgr'});
        // } else if (type === 'ushibRanaNoogr') {
        //     dispatchFunction({type: 'ushibRanaNoogr'});
        // }
        if (type === 'ushibRanaOgr') {
            dispatchFunction(dopPovrezhdenia.ushibRanaOgr());
        } else if (type === 'ushibRanaNoogr') {
            dispatchFunction(dopPovrezhdenia.ushibRanaNoogr());
        }
    }

    return (
        <div className="side-menu-wrapper">
            <div className="side-menu">
                <ul> Дополнительно добавить повреждения:
                    <li className= {ushibRanaOgr ? 'linkActive': ''} onClick={() => changeStatusHandler('ushibRanaOgr')}>
                        Ушибленная рана (ограниченная поверхность)
                    </li>
                    <li className= {ushibRanaNoogr ? 'linkActive': ''} onClick={() => changeStatusHandler('ushibRanaNoogr')}>
                        Ушибленная рана (неограниченная поверхность)
                    </li>
                    <li>Множесвенные ушибленные раны головы</li>
                    <li>Перелом плоской кости (ограниченная поверхность)</li>
                    <li>Перелом плоской кости (неограниченная поверхность)</li>
                    <li>Укушенное повреждение кожи</li>
                    
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;

