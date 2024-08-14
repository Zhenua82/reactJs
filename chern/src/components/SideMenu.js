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
    const rezanRana = useSelector((state) => state.dopPovrezhden.rezanRana);
    const ushib = useSelector((state) => state.dopPovrezhden.ushib);
    const colotoRez = useSelector((state) => state.dopPovrezhden.colotoRez);
    const mnogo = useSelector((state) => state.dopPovrezhden.mnogo);
    const ognestrelMnozh = useSelector((state) => state.dopPovrezhden.ognestrelMnozh);
    const ognestrelOdin = useSelector((state) => state.dopPovrezhden.ognestrelOdin);
    const colotayaRana = useSelector((state) => state.dopPovrezhden.colotayaRana);
    const ushibRanaMk = useSelector((state) => state.dopPovrezhden.ushibRanaMk);
    const ozhogiMk = useSelector((state) => state.dopPovrezhden.ozhogiMk);
    const ozhogPlamenem = useSelector((state) => state.dopPovrezhden.ozhogPlamenem);
    const ploskKostjOgr = useSelector((state) => state.dopPovrezhden.ploskKostjOgr);
    const ploskKostjNoogr = useSelector((state) => state.dopPovrezhden.ploskKostjNoogr);
    const colotoRezMk = useSelector((state) => state.dopPovrezhden.colotoRezMk);
    const ognestrelPya = useSelector((state) => state.dopPovrezhden.ognestrelPya);
    
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
        } else if (type === 'rezanRana') {
            dispatchFunction(dopPovrezhdenia.rezanRana());
        }else if (type === 'ushib') {
            dispatchFunction(dopPovrezhdenia.ushib());
        }else if (type === 'colotoRez') {
            dispatchFunction(dopPovrezhdenia.colotoRez());
        }else if (type === 'mnogo') {
            dispatchFunction(dopPovrezhdenia.mnogo());
        }else if (type === 'ognestrelMnozh') {
            dispatchFunction(dopPovrezhdenia.ognestrelMnozh());
        }else if (type === 'ognestrelOdin') {
            dispatchFunction(dopPovrezhdenia.ognestrelOdin());
        }else if (type === 'colotayaRana') {
            dispatchFunction(dopPovrezhdenia.colotayaRana());
        }else if (type === 'ushibRanaMk') {
            dispatchFunction(dopPovrezhdenia.ushibRanaMk());
        }else if (type === 'ozhogiMk') {
            dispatchFunction(dopPovrezhdenia.ozhogiMk());
        }else if (type === 'ozhogPlamenem') {
            dispatchFunction(dopPovrezhdenia.ozhogPlamenem());
        }else if (type === 'ploskKostjOgr') {
            dispatchFunction(dopPovrezhdenia.ploskKostjOgr());
        }else if (type === 'ploskKostjNoogr') {
            dispatchFunction(dopPovrezhdenia.ploskKostjNoogr());
        }else if (type === 'colotoRezMk') {
            dispatchFunction(dopPovrezhdenia.colotoRezMk());
        }else if (type === 'ognestrelPya') {
            dispatchFunction(dopPovrezhdenia.ognestrelPya());
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
                    <li className= {ushibRanaMk ? 'linkActive': ''} onClick={() => changeStatusHandler('ushibRanaMk')}>
                        Ушибленная рана + перелом плоской кости (мед. крим.)
                    </li>
                    <li className= {mnogo ? 'linkActive': ''} onClick={() => changeStatusHandler('mnogo')}>
                        Множество повреждений (кровоподтеки, ссадины, перелом зуба, ушибленная рана)
                    </li>
                    <li className= {rezanRana ? 'linkActive': ''} onClick={() => changeStatusHandler('rezanRana')}>
                        Peзаные раны
                    </li>
                    <li className= {colotayaRana ? 'linkActive': ''} onClick={() => changeStatusHandler('colotayaRana')}>
                        Колотое ранение
                    </li>
                    <li className= {colotoRez ? 'linkActive': ''} onClick={() => changeStatusHandler('colotoRez')}>
                        Колото-резаное ранение
                    </li>
                    <li className= {colotoRezMk ? 'linkActive': ''} onClick={() => changeStatusHandler('colotoRezMk')}>
                        Колото-резаное ранение + мед. крим. (нож, одежда, хрящевая часть ребра):
                    </li>
                    <li className= {ognestrelOdin ? 'linkActive': ''} onClick={() => changeStatusHandler('ognestrelOdin')}>
                        Одиночное огнестрельное  ранение (ПМ)
                    </li>
                    <li className= {ognestrelPya ? 'linkActive': ''} onClick={() => changeStatusHandler('ognestrelPya')}>
                        Одиночное огнестрельное  ранение + мед. крим. (ПЯ)
                    </li>
                    <li className= {ognestrelMnozh ? 'linkActive': ''} onClick={() => changeStatusHandler('ognestrelMnozh')}>
                        Множественные огнестрельные  ранения + мед. крим. (АК-74)
                    </li>
                    <li className= {ploskKostjOgr ? 'linkActive': ''} onClick={() => changeStatusHandler('ploskKostjOgr')}>
                        Перелом плоской кости (ограниченная поверхность)
                    </li>
                    <li className= {ploskKostjNoogr ? 'linkActive': ''} onClick={() => changeStatusHandler('ploskKostjNoogr')}>
                        Перелом плоской кости + мед. крим. (неограниченная поверхность)
                    </li>
                    <li className= {bampPerelom ? 'linkActive': ''} onClick={() => changeStatusHandler('bampPerelom')}>
                        Бампер-перелом
                    </li>
                    <li className= {ozhogiMk ? 'linkActive': ''} onClick={() => changeStatusHandler('ozhogiMk')}>
                        Контактные ожоги (+ мед. крим.)
                    </li>
                    <li className= {ozhogPlamenem ? 'linkActive': ''} onClick={() => changeStatusHandler('ozhogPlamenem')}>
                        Ожог пламенем
                    </li>
                    <li className= {ushib ? 'linkActive': ''} onClick={() => changeStatusHandler('ushib')}>
                        "Ушиб" (отсутствие повреждений)
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;

