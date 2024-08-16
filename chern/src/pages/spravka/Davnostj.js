import Header from '../../components/Header';
import styles from './RukDok.module.css';
import Footer from '../../components/Footer';
// import vozrast from '../../assets/vozrast.png';


function Davnostj(){
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Определение давности смерти:</h2>
                <a className={styles.link} href='https://www.forens-med.ru/book.php?id=1921#2' target='_blank' rel="noopener noreferrer">
                https://www.forens-med.ru/book.php?id=1921#2</a>
                <a className={styles.link} href='https://studfile.net/preview/1147453/page:7/' target='_blank' rel="noopener noreferrer">
                https://studfile.net/preview/1147453/page:7/</a>


                <h2 className={styles.title}>Давность образования повреждений:</h2>
                <a className={styles.link} href='https://www.forens-med.ru/cat_t.php?id=70' target='_blank' rel="noopener noreferrer">
                https://www.forens-med.ru/cat_t.php?id=70</a> 
                <a className={styles.link} href='https://sudmed46.ru/data/documents/Opredelenie-davnosti-povrezhdeniy.pdf' target='_blank' rel="noopener noreferrer">
                https://sudmed46.ru/data/documents/Opredelenie-davnosti-povrezhdeniy.pdf</a>

                <h2 className={styles.title}>Определение давности рубцов кожи:</h2>
                <a className={styles.link} href='https://forensicmedicine.ru/wiki/Рубец' target='_blank' rel="noopener noreferrer">
                https://forensicmedicine.ru/wiki/Рубец</a> 
                
                {/* <h2 className={styles.title}>Форма живота:</h2>
                <p id='MsoBodyTextIndent'>При осмотре живота необходимо оценить:
                    Форму и величину(плоский, округлый, втянутый, запавший, распластанный -«лягушачий», асимметричный и т.п.);
                    В норме форма живота правильная, при перитоните доскообразная, при наличии асцита живот, увеличиваясь в объеме, принимает шарообразную форму (в положении стоя), или «лягушачью» - в положении лежа, когда жидкость собирается в боковых фланках (при небольшом объеме жидкости).
                    Втянутый живот характерен для запущенных случаев опухолей пищевода и желудка, которые сопровождаются нарушением поступления пищи в нижележащие отделы, одновременно у больного, как правило, отмечается пищеводная или желудочная рвота. Втянутый, ладьевидный живот также наблюдается у больных при наличии острой или хронической диареи и при свинцовой колике.
                    Иногда при перитоните или паретической непроходимости кишечника, а также при выраженном метеоризме может также обнаруживаться шарообразное выпячивание живота. При тяжелых нарушениях всасывания в тонком кишечнике живот также часто увеличен в размере, равномерно вздут. Живот может быть увеличен в объеме и за счет чрезмерно развитого подкожного жирового слоя при ожирении (как правило равномерное увеличение).
                    </p> 
                <div>Источник:<a className={styles.link} href='https://studfile.net/preview/2766357/page:143/' target='_blank' rel="noreferrer">
                https://studfile.net/preview/2766357/page:143/</a> </div>     */}
            </div>
            <Footer/>
        </>
    )
}
export default Davnostj