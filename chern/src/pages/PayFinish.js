import imgFinishPay from '../assets/finishPay.png';
import Header from '../components/Header';

import { Helmet } from 'react-helmet';

function PayFinish(){
    return(
        <>
        <Helmet>
            <title>Конструктор заключений по смэ - Завершение оплаты</title>
            <meta
            name="description"
            content="Страница завершения оплаты в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
            />
        </Helmet>
        <Header/>
            <div className='finishPay'>
                {/* Готовые кнопки оплаты: */}
                <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146SFPKJ8JJ.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​
                {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146VU7AUQSS.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                
                {/* <h2>После завершения платежа, для загрузки сформированного документа <span className='red'>обязательно!!! </span> нажмите кнопку «Вернуться на сайт», как показано на изображении ниже</h2>
                <img src={imgFinishPay} alt="взнос" /> */}
                
                <h2>Сформированный документ будет автоматически загружен на Ваш компьютер после завершения платежа и нажатия кнопки «Вернуться на сайт», как показано на изображении ниже:</h2>
                <img src={imgFinishPay} alt="взнос" /> 
                
            </div>
        </>
    )
}
export default PayFinish;