import Popup from '../components/Popup';
import Header from '../components/Header';

import { useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';



function Pay(){

    console.log("pay 5555555555")

    const exp = useSelector((state) => state.expNeopState.exp);
    const neop = useSelector((state) => state.expNeopState.neop);
    const sex = useSelector((state) => state.expNeopState.sex);
    const popup = useSelector((state) => state.expNeopState.popup);
    const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
    const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    console.log(exp, neop, sex, popup, ushibRanaOgr, ushibRanaNoogr)

    return (
        <>
        <Helmet>
            <title>Конструктор заключений по смэ - Оплата</title>
            <meta
            name="description"
            content="Страница оплаты в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
            />
            <meta name="robots" content="noindex" />
        </Helmet>
            <Header/>
            <Popup/>
        </>
    )
}
export default Pay