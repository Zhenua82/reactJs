import Header from "../components/Header"
import { NavLink } from 'react-router-dom';

function Spravka(){
    return(
        <>
            <Header></Header>
            <h1>Справочная информация:</h1>
            <NavLink to='/info/verbalPortrait'> <h2 id="MsoBodyTextIndent" className="linkk">Cловесный портрет</h2> </NavLink>
        </>
    )
}
export default Spravka