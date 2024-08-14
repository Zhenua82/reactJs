import Header from "../components/Header"
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

function Spravka(){
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
                </div>         
            </div>
            
            <Footer></Footer>
        </>
    )
}
export default Spravka