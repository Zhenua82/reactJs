import Header from "../components/Header"
import { Helmet } from 'react-helmet';

function InJob(){
    return(
        <>
        <Helmet>
        <title>Конструктор заключений по смэ - В процессе работы</title>
        <meta
          name="description"
          content="Страница в процессе работы в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
        />
        </Helmet>
            <Header></Header>
            <h1>Извините! Выбранная вами нозология находится в разработке. В ближайшее время доступ к ней будет открыт.</h1>
        </>
    )
}
export default InJob