import imgFinishPay from '../assets/finishPay.png';
import Header from '../components/Header';

function PayFinish(){
    return(
        <>
        <Header/>
            <div className='finishPay'>
                {/* Готовые кнопки оплаты: */}
                {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146SFPKJ8JJ.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146VU7AUQSS.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​
                {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                {/* <h2>Для загрузки сформированного документа, <span className='red'>обязательно!!! </span>, при окончании платежа нажмите на кнопку "Вернуться на сайт", как показано на картинке ниже:</h2> */}
                <h2>После завершения платежа, для загрузки сформированного документа <span className='red'>обязательно!!! </span> нажмите кнопку «Вернуться на сайт», как показано на изображении ниже</h2>
                <img src={imgFinishPay} alt="взнос" />
            </div>
        </>
    )
}
export default PayFinish;