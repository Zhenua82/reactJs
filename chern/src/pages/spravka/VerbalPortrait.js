import verbPort from '../../assets/verbPort.webp';
import verbPort2 from '../../assets/verbPort2.webp';
import Header from '../../components/Header';
import styles from './VerbalPortrait.module.css';
import Footer from '../../components/Footer';

function VerbalPortrait(){
    return (
        <>
        {/* <Header />
            <h1>Словесный портрет</h1>
            <img src={verbPort} alt="Словесный портрет"/><br></br>
            <a href='https://studfile.net/preview/3651153/page:2/'>Методика описания признаков внешности человека (метод словесного портрета)</a>
            <img src={verbPort2} alt="Словесный портрет 2"/><br></br>
            <a href='https://darminaopel.ru/library/shema-opisanija-vneshnosti-cheloveka-po-metodu-slovesnogo-portreta.html'>Схема описания внешности человека по методу словесного портрета</a> */}
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Словесный портрет</h1>
                <img className={styles.image} src={verbPort} alt="Словесный портрет"/>
                <div>Источник: <a className={styles.link} href='https://darminaopel.ru/library/shema-opisanija-vneshnosti-cheloveka-po-metodu-slovesnogo-portreta.html' target='_blank' rel="noreferrer">
                Схема описания внешности человека по методу словесного портрета</a> </div>
                <img className={styles.image} src={verbPort2} alt="Словесный портрет 2"/>
                <a className={styles.link} href='https://studfile.net/preview/3651153/page:2/' target='_blank' rel="noreferrer">Методика описания признаков внешности человека (метод словесного портрета)</a>
            </div>
            <Footer/>
        </>
    )
}
export default VerbalPortrait
