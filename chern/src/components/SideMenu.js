import React from 'react';
import './SideMenu.css'; // Подключение CSS для стилей компонента

import { useSelector, useDispatch } from 'react-redux';
import { dopPovrezhdenia } from '../store/index';

function SideMenu() {
    const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
    const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const bampPerelom = useSelector((state) => state.dopPovrezhden.bampPerelom);
    const krovopodtek = useSelector((state) => state.dopPovrezhden.krovopodtek);
    const ssadiny = useSelector((state) => state.dopPovrezhden.ssadiny);
    const krovUpr = useSelector((state) => state.dopPovrezhden.krovUpr);
    
    const dispatchFunction = useDispatch();
    function changeStatusHandler(type){
        if (type === 'ushibRanaOgr') {
            dispatchFunction(dopPovrezhdenia.ushibRanaOgr());
        } else if (type === 'ushibRanaNoogr') {
            dispatchFunction(dopPovrezhdenia.ushibRanaNoogr());
        } else if (type === 'bampPerelom') {
            dispatchFunction(dopPovrezhdenia.bampPerelom());
        } else if (type === 'krovopodtek') {
            dispatchFunction(dopPovrezhdenia.krovopodtek());
        } else if (type === 'ssadiny') {
            dispatchFunction(dopPovrezhdenia.ssadiny());
        } else if (type === 'krovUpr') {
            dispatchFunction(dopPovrezhdenia.krovUpr());
        }
    }

    return (
        <div className="side-menu-wrapper">
            <div className="side-menu">
                <ul> Дополнительно добавить повреждения:
                    <li className= {krovopodtek ? 'linkActive': ''} onClick={() => changeStatusHandler('krovopodtek')}>
                        Кровоподтек
                    </li>
                    <li className= {ssadiny ? 'linkActive': ''} onClick={() => changeStatusHandler('ssadiny')}>
                        Ссадины
                    </li>
                    <li className= {krovUpr ? 'linkActive': ''} onClick={() => changeStatusHandler('krovUpr')}>
                        Кровоподтеки и ссадины (упрощенный вариант)
                    </li>
                    <li className= {ushibRanaOgr ? 'linkActive': ''} onClick={() => changeStatusHandler('ushibRanaOgr')}>
                        Ушибленная рана (ограниченная поверхность)
                    </li>
                    <li className= {ushibRanaNoogr ? 'linkActive': ''} onClick={() => changeStatusHandler('ushibRanaNoogr')}>
                        Ушибленная рана (неограниченная поверхность)
                    </li>
                    <li className= {bampPerelom ? 'linkActive': ''} onClick={() => changeStatusHandler('bampPerelom')}>
                        Бампер-перелом
                    </li>
                    <li>Перелом плоской кости (ограниченная поверхность)</li>
                    <li>Перелом плоской кости (неограниченная поверхность)</li>
                    <li>Укушенное повреждение кожи</li>
                    
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;

