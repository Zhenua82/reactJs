import Header from "../components/Header"
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

import { Helmet } from 'react-helmet';

function Spravka(){
    <Helmet>
        <title>Конструктор заключений по смэ - Справка</title>
        <meta
          name="description"
          content="Справочная страница в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
        />
      </Helmet>
    return(
        <>
            <Header></Header>
            <h1 className={styles.h1Home}>Справочная информация:</h1>
            <div className={styles.pergamentWrap}>
                <div className={styles.wraperHome}>
                    <NavLink to='/info/rukDok'> <h2 id="MsoBodyTextIndent" className="linkk">Руководящие документы</h2> </NavLink>
                    <NavLink to='/info/verbalPortrait'> <h2 id="MsoBodyTextIndent" className="linkk">Cловесный портрет</h2> </NavLink>
                    <NavLink to='/info/vozrast'> <h2 id="MsoBodyTextIndent" className="linkk">Возраст, телосложение, рост, статус питания</h2> </NavLink>
                    <NavLink to='/info/davnostj'> <h2 id="MsoBodyTextIndent" className="linkk">Давность повреждений и смерти</h2> </NavLink>               
                    <a href='https://www.forens-med.ru/book.php?id=458' target="_blank" rel="noopener noreferrer">
                        <h2 id="MsoBodyTextIndent" className="linkk">Размеры и вес внутренних органов</h2>
                    </a>               
                </div>         
            </div>
            
            <Footer></Footer>
        </>
    )
}
export default Spravka