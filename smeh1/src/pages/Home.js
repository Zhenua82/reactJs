// import Header from "../components/Header"
// import styles from './Home.module.css';


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// import { useSelector } from 'react-redux';


  

// function Home(){
//     const [money, setMoney] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const referrer = document.referrer;
//         if (referrer.includes('https://yoomoney.ru/transfer/process/success?orderId')) {
//         setMoney(true);
//         }
//     }, [location]);

//     console.log(money)
//     console.log("home 5555555555")

//     const exp = useSelector((state) => state.expNeopState.exp);
//     const neop = useSelector((state) => state.expNeopState.neop);
//     const sex = useSelector((state) => state.expNeopState.sex);
//     const popup = useSelector((state) => state.expNeopState.popup);
//     const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
//     const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
//     console.log(exp, neop, sex, popup, ushibRanaOgr, ushibRanaNoogr)


//     return (
//         <>
//         <Header></Header>
//         <h1>Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа</h1>
//         {money && <p>Оплата прошла успешно!</p>}
//         </>    
//     )
// }
// export default Home


import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import styles from './Home.module.css';

function Home() {
    const [money, setMoney] = useState(false);

    useEffect(() => {
        // Вывод реферера (URL предыдущей страницы) в консоль
        // document.referrer будет работать корректно при переходе с одной HTTPS страницы на другую HTTPS страницу. Политика 
        // безопасности браузеров позволяет передавать реферер между страницами, которые обе используют защищенное соединение (HTTPS).
        console.log('Referrer URL:', document.referrer);
        console.log('New!')

        const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [name, value] = cookie.split('=');
            acc[name] = value;
            return acc;
        }, {});

        console.log('All cookies:', allCookies);
        console.log('paymentInitiated in cookies:', allCookies.paymentInitiated);
        console.log('paymentInitiated in localStorage:', localStorage.getItem('paymentInitiated'));

        if (allCookies.paymentInitiated === 'true' && localStorage.getItem('paymentInitiated') === 'true') {
            setMoney(true);
            console.log('Payment initiated found in cookies and localStorage');
            // Удаление cookie
            document.cookie = 'paymentInitiated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            // Удаление значения из localStorage
            localStorage.removeItem('paymentInitiated');
        } else {
            console.log('Payment initiated not found in cookies or localStorage');
        }
    }, []);

    console.log('Money status:', money);
    console.log('Home component rendered');

    return (
        <>
            <Header></Header>
            <h1>Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа</h1>
            {money && <p>Оплата прошла успешно!</p>}
        </>
    );
}

export default Home;