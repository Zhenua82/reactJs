import React from 'react';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { expNeopStatee } from '../store/index';
import {useHistory} from 'react-router-dom';

function Popup() {
    const [cookies, setCookie] = useCookies(['paymentInitiated']);
    const dispatchFunction = useDispatch();
    const history = useHistory();

    const exp = useSelector((state) => state.expNeopState.exp);
    const neop = useSelector((state) => state.expNeopState.neop);
    const sex = useSelector((state) => state.expNeopState.sex);
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

    function redirectToYooMoney() {
        // Установка cookie перед редиректом
        setCookie('paymentInitiated', 'true', { path: '/' });
        
        // Установка значения в localStorage
        localStorage.setItem('paymentInitiated', 'true');

        // Установка в localStorage url текущей страницы:
        // localStorage.setItem('url', window.location.href);
        localStorage.setItem('url', window.location.pathname);

        // Установка в localStorage данных хранилища текущей страницы:
        const data = {exp, neop, sex, ushibRanaOgr, ushibRanaNoogr, bampPerelom, krovopodtek, ssadiny, krovUpr, rezanRana, ushib, colotoRez, mnogo, ognestrelMnozh, 
            ognestrelOdin, colotayaRana, ushibRanaMk, ozhogiMk, ozhogPlamenem, ploskKostjOgr, ploskKostjNoogr, colotoRezMk};
        localStorage.setItem('data', JSON.stringify(data));

        // Открытие нового окна/вкладки для редиректа на yoomoney.ru
        // window.open('https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727', '_blank');
        // const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&returnUrl=http://localhost:3000/otravlenieNeftM`;
        // const redirectUrl = `https://yoomoney.ru/transfer/quickpay?requestId=353439383130353835335f66613231663064646534393235313364333231386365383865386130616539366631333536666331&returnUrl=http://localhost:3000/home?referrer=https://yoomoney.ru/transfer/process/success?orderId=...`;
        // const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&returnUrl=http://localhost:3000/home?referrer=https://yoomoney.ru/transfer/process/success?orderId=...`;
        // const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727`;
        // window.open(redirectUrl, '_blank');
        history.push('/payFinish');
    };
    function close(){
                //Для всплывающего окна:
                dispatchFunction(expNeopStatee.popup(false));}

    return (
        <>
            <div className="popup">
                {/* <div className="popupClose" onClick={() => window.history.back()}>X</div> */} {/* Для отдельного окна */}
                <div className="popupClose" onClick={close}>X</div>
                <div className="popupTitle">
                    <h1>Для дальнейшей загрузки сформированного документа, Вы можете добровольно пожертвовать (внести взнос в размере 300 рублей) на содержание и развитие данного проекта</h1>
                </div>
                <div className="payButton" onClick={redirectToYooMoney}>
                    <button>Перейти к оплате</button>
                    {/* Готовые кнопки оплаты: */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146SFPKJ8JJ.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146VU7AUQSS.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                </div>
            </div>
        </>
    );
}

export default Popup;
