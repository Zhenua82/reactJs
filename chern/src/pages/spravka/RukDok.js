// import verbPort2 from '../../assets/verbPort.webp';
import Header from '../../components/Header';
import styles from './RukDok.module.css';
import Footer from '../../components/Footer';

import { Helmet } from 'react-helmet';

function RukDok(){
    return (
        <>
        <Helmet>
            <title>Конструктор заключений по смэ - Руководящие документы</title>
            <meta
            name="description"
            content="Страница руководящих документов в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
            />
        </Helmet>
            <Header />
            <div className={styles.container}>
                {/* <img className={styles.image} src={verbPort2} alt="Словесный портрет 2"/> */}
                <h1 className={styles.title}>Руководящие документы:</h1>
                <a className={styles.link} href='https://base.garant.ru/12123142/' target='_blank' rel="noopener noreferrer">
                Федеральный закон от 31 мая 2001 г. N 73-ФЗ "О государственной судебно-экспертной деятельности в Российской Федерации"</a>
                <a className={styles.link} href='https://www.consultant.ru/document/cons_doc_LAW_10699/' target='_blank' rel="noopener noreferrer">
                Уголовный кодекс Российской Федерации</a>
                <a className={styles.link} href='https://www.consultant.ru/document/cons_doc_LAW_34481/' target='_blank' rel="noopener noreferrer">
                Уголовно-процессуальный кодекс Российской Федерации</a>
                <a className={styles.link} href='https://base.garant.ru/12155259/' target='_blank' rel="noopener noreferrer">
                Постановление Правительства РФ от 17 августа 2007 г. N 522 "Об утверждении Правил определения степени тяжести вреда, причиненного здоровью человека"</a>
                <a className={styles.link} href='https://base.garant.ru/12162210/' target='_blank' rel="noopener noreferrer">
                Приказ Министерства здравоохранения и социального развития РФ от 24 апреля 2008 г. N 194н "Об утверждении Медицинских критериев определения степени тяжести вреда, причиненного здоровью человека"</a>
                <a className={styles.link} href='https://www.garant.ru/products/ipo/prime/doc/407773441/' target='_blank' rel="noopener noreferrer">
                Приказ Министерства здравоохранения РФ от 25 сентября 2023 г. № 491н “Об утверждении Порядка проведения судебно-медицинской экспертизы”</a>
                <a className={styles.link} href='https://minzdrav.gov.ru/documents/7686-prikaz-minzdravsotsrazvitiya-rossii-782n-ot-26-dekabrya-2008-g' target='_blank' rel="noopener noreferrer">
                Приказ Минздравсоцразвития России №782н от 26 декабря 2008 г. "Об утверждении и порядке ведения медицинской документации, удостоверяющей случаи рождения и смерти"</a>
                <a className={styles.link} href='https://mkb-10.com/' target='_blank' rel="noopener noreferrer">
                Международная классификация болезней 10-го пересмотра (МКБ-10)</a>
                <a className={styles.link} href='https://rulaws.ru/acts/Pismo-FSS-RF-ot-01.09.2000-N-02-18_10-5766/' target='_blank' rel="noopener noreferrer">
                Письмо ФСС РФ от 01.09.2000 N 02-18/10-5766 "Об ориентировочных сроках временной нетрудоспособности при наиболее распространенных заболеваниях и травмах"</a>
            </div>
            <Footer/>
        </>
    )
}
export default RukDok