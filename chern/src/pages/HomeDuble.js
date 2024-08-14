import React, { useEffect } from 'react';
import Header from "../components/Header";
import styles from './Home.module.css';
import {useHistory} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { expNeopStatee, dopPovrezhdenia } from '../store/index';

import imgSlide11 from '../assets/slide11.JPG'
import imgSlide2 from '../assets/slide2.JPG'
import imgSlide33 from '../assets/slide33.JPG'
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

function HomeDuble() {
    const dispatchFunction = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // Вывод реферера (URL предыдущей страницы) в консоль
        // document.referrer будет работать корректно при переходе с одной HTTPS страницы на другую HTTPS страницу. Политика 
        // безопасности браузеров позволяет передавать реферер между страницами, которые обе используют защищенное соединение (HTTPS).
        // console.log('Referrer URL:', document.referrer);
        // const referrer = document.referrer;
        // if (referrer.includes('https://yoomoney.ru/transfer/process/success?orderId')) {
        //     dispatchFunction(expNeopStatee.money(true));
        // }
        const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [name, value] = cookie.split('=');
            acc[name] = value;
            return acc;
        }, {});

        if (allCookies.paymentInitiated === 'true' && localStorage.getItem('paymentInitiated') === 'true' && document.referrer === '') {
            dispatchFunction(expNeopStatee.money(true));

            // Удаление cookie
            document.cookie = 'paymentInitiated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            // Удаление значения из localStorage:
            localStorage.removeItem('paymentInitiated');
            //Получение data (данных) из localStorage и отправка их в хранилище: 
            const data = JSON.parse(localStorage.getItem('data'));
            dispatchFunction(expNeopStatee.exp(data.exp));
            dispatchFunction(expNeopStatee.neop(data.neop)); 
            dispatchFunction(expNeopStatee.sex(data.sex));
            data.ushibRanaOgr && dispatchFunction(dopPovrezhdenia.ushibRanaOgr());
            data.ushibRanaNoogr && dispatchFunction(dopPovrezhdenia.ushibRanaNoogr());
            data.bampPerelom && dispatchFunction(dopPovrezhdenia.bampPerelom());
            data.krovopodtek && dispatchFunction(dopPovrezhdenia.krovopodtek());
            data.ssadiny && dispatchFunction(dopPovrezhdenia.ssadiny());
            data.krovUpr && dispatchFunction(dopPovrezhdenia.krovUpr());
            data.rezanRana && dispatchFunction(dopPovrezhdenia.rezanRana());
            data.ushib && dispatchFunction(dopPovrezhdenia.ushib());
            data.colotoRez && dispatchFunction(dopPovrezhdenia.colotoRez());
            data.mnogo && dispatchFunction(dopPovrezhdenia.mnogo());
            data.ognestrelMnozh && dispatchFunction(dopPovrezhdenia.ognestrelMnozh());
            data.ognestrelOdin && dispatchFunction(dopPovrezhdenia.ognestrelOdin());
            data.colotayaRana && dispatchFunction(dopPovrezhdenia.colotayaRana());
            data.ushibRanaMk && dispatchFunction(dopPovrezhdenia.ushibRanaMk());
            data.ozhogiMk && dispatchFunction(dopPovrezhdenia.ozhogiMk());
            data.ozhogPlamenem && dispatchFunction(dopPovrezhdenia.ozhogPlamenem());
            data.ploskKostjOgr && dispatchFunction(dopPovrezhdenia.ploskKostjOgr());
            data.ploskKostjNoogr && dispatchFunction(dopPovrezhdenia.ploskKostjNoogr());
            data.colotoRezMk && dispatchFunction(dopPovrezhdenia.colotoRezMk());
            data.ognestrelPya && dispatchFunction(dopPovrezhdenia.ognestrelPya());

            //Перенаправление на страницу url которой сохранен в localstorage:
            // window.open(localStorage.getItem('url'));
            // history.push(localStorage.getItem('url', '_blank'));
            history.push(localStorage.getItem('url'));
            // Удаление значения из localStorage url:
            localStorage.removeItem('url');
            // Удаление data (данных) из localStorage:
            localStorage.removeItem('data');
        }
    }, []);

    const money = useSelector((state) => state.expNeopState.money);
    console.log('Money status:', money);

    return (
        <>
            <Header></Header>
            <h1 className={styles.h1Home}>Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа</h1>
            {money && <p>Оплата прошла успешно!</p>}
            <img src={imgSlide11} alt="Word" className={styles.imgHome}/>
            <NavLink className={styles.link} to='/search'><button className={styles.btnHome}>Начать работу</button></NavLink>
            <img src={imgSlide2} alt="Word" className={styles.imgHome}/>
            {/* <h2> zzhmenka@yandex.ru</h2> */}
            <h2 className={styles.h2Home}>
                <a href="mailto:zzhmenka@yandex.ru">zzhmenka@yandex.ru</a>
            </h2>
            <img src={imgSlide33} alt="Word" className={styles.imgHome}/>
            <Footer></Footer> 
        </>
    );
}

export default HomeDuble;