import wordImg from '../assets/word2.svg';

import Header from "../components/Header";
import HeaderExp from "../components/HeaderExp";
import HeaderSpec from "../components/HeaderSpec";
import SideMenu from "../components/SideMenu";

import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../components/Popup';
import { expNeopStatee } from '../store/index';
import { useHistory } from 'react-router-dom';
//Импорт компонентов доп повреждений:
import DopPovrezhdeniaOpis from '../components/DopPovrezhdeniaOpis';
import DopPovrezhdeniaVnutr from '../components/DopPovrezhdeniaVnutr';
import DopPovrezhdeniaLab from '../components/DopPovrezhdeniaLab';
import DopPovrezhdeniaDiagnoz from '../components/DopPovrezhdeniaDiagnoz';
import DopPovrezhdeniaVyvody from '../components/DopPovrezhdeniaVyvody';

import { Helmet } from 'react-helmet';

function RakProstatyF(props){
    const history = useHistory();
    const dispatchFunction = useDispatch();
    const money = useSelector((state) => state.expNeopState.money);
    const contentRef = useRef(null);
    
    useEffect(() => {
        if (money === true) {
            props.peredacha();
            dispatchFunction(expNeopStatee.money(false));
        } 
    }, [money, dispatchFunction, props]);

    function generateDocument(){
        // props.peredacha()
        dispatchFunction(expNeopStatee.popup(true));
        // history.push('/pay') //Отдельная страница   
    }

    //Получаем из хранилища состояние вида экспертизы личности трупа и пола:
    const exp = useSelector((state) => state.expNeopState.exp);
    const neop = useSelector((state) => state.expNeopState.neop);
    const sex = useSelector((state) => state.expNeopState.sex);
    const popup = useSelector((state) => state.expNeopState.popup);

    return ( 
        <>
        <Helmet>
        <title>Рак предстательной железы (женщина) экспертиза трупа</title>
        <meta
          name="description"
          content="Рак предстательной железы у женщин в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
        />
        <meta name="robots" content="noindex" />
         </Helmet>
        <SideMenu />
            <Header />
            <div className="content-wrapper">
                <div className="content" ref={contentRef}>
                    <h1>Ошибка! Возможно, выбранный диагноз не соответствует полу трупа</h1>                
                </div>
                <button onClick={generateDocument} className="clickable-button">
                    <img src={wordImg} alt="Word" className='wordImg' />
                    Сохранить <br></br> составленное <br></br> заключение <br></br>в Word (.docx)
                </button>
                <div className="overlay"></div> {/* Overlay to block clicks */}
                {(popup === true) && <Popup/>}  
            </div>
        </>
    )
}

export default RakProstatyF