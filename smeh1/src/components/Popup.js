// import { useSelector, useDispatch } from 'react-redux';
// import { expNeopStatee } from '../store/index';
// import { useHistory } from 'react-router-dom';


// import { useCookies } from 'react-cookie';


// function Popup(){
//     const dispatchFunction = useDispatch();
//     const popup = useSelector((state) => state.expNeopState.pupup);
//     const history = useHistory();
//     function close(){
//         // Для всплывающего окна:
//         // dispatchFunction(expNeopStatee.popup(false));

//         //Для отдельного окна:
//         history.goBack();
//     }

//     // Пример функции, которая инициирует редирект на yoomoney.ru
//     function redirectToYooMoney() {
//     // Установка cookie перед редиректом
//     document.cookie = "paymentInitiated=true; path=/";
//     console.log('redirect')
//     }


//     return (
//         <>
//         <div className="popup">
//             <div className="popupClose" onClick={close}>X</div>
//             <div className="popupTitle">
//                 <h1>Для дальнейшей загрузки сформированного документа, Вы можете добровольно пожертвовать (внести взнос в размере 300 рублей) на содержание и развитие данного проекта</h1>
//             </div>
            
//             <div className="payButton" onClick={redirectToYooMoney}>
//                 {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146SFPKJ8JJ.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
//                 {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146VU7AUQSS.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
//                 <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​
//             </div>
            
//         </div>
        
//         </>
//     )
// }
// export default Popup



import React from 'react';
import { useCookies } from 'react-cookie';

function Popup() {
    const [cookies, setCookie] = useCookies(['paymentInitiated']);

    function redirectToYooMoney() {
        // Установка cookie перед редиректом
        setCookie('paymentInitiated', 'true', { path: '/' });
        console.log('Redirecting to yoomoney');
        console.log('Cookie set:', document.cookie);

        // Установка значения в localStorage
        localStorage.setItem('paymentInitiated', 'true');
        console.log('localStorage set:', localStorage.getItem('paymentInitiated'));

        // Открытие нового окна/вкладки для редиректа на yoomoney.ru
        // window.open('https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727', '_blank');

        // const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&returnUrl=http://localhost:3000/otravlenieNeftM`;
        // const redirectUrl = `https://yoomoney.ru/transfer/quickpay?requestId=353439383130353835335f66613231663064646534393235313364333231386365383865386130616539366631333536666331&returnUrl=http://localhost:3000/home?referrer=https://yoomoney.ru/transfer/process/success?orderId=...`;
        const redirectUrl = `https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727`;
        window.open(redirectUrl, '_blank');
    }

    return (
        <>
            <div className="popup">
                <div className="popupClose" onClick={() => window.history.back()}>X</div>
                <div className="popupTitle">
                    <h1>Для дальнейшей загрузки сформированного документа, Вы можете добровольно пожертвовать (внести взнос в размере 300 рублей) на содержание и развитие данного проекта</h1>
                </div>
                <div className="payButton" onClick={redirectToYooMoney}>
                    <button>Перейти к оплате</button>
                </div>
            </div>
        </>
    );
}

export default Popup;
