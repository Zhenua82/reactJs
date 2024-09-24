import Header from "../components/Header";
import styles from './Home.module.css';

import imgSlide11 from '../assets/slide11.JPG'
import imgSlide2 from '../assets/slide2.JPG'
import imgSlide33 from '../assets/slide33.JPG'
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

import { Helmet } from 'react-helmet';

function Home() {

    return (
        <>
        <Helmet>
            <title>Конструктор заключений по смэ - главная, экспертиза трупа</title>
            <meta
            name="description"
            content="Составление заключений по судебно-медицинской экспертизе (смэ) трупа, главная страница."
            />
            <link rel="canonical" href="https://constructor-sme.ru/home" />
        </Helmet>
            <Header></Header>
            {/* <h1>Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа</h1>
            <div className={styles.pergamentWrap}>
                <div className={styles.wraperHome}>
                    <h3>Сайт предназначен как для изучающих судебную медицину, так и для практикующих судебно-медицинских экспертов. Все материалы, представленные на сайте, основаны на реальных судебно-медицинских 
                        экспертизах, но для предотвращения различных недоразумений они обезличены, названия и даты - изменены, поэтому любые совпадения с реальными событиями являются случайными.
                    </h3>
                    <h3>Цель создания данного проекта - автоматизация процесса составления заключений по исследованию трупа в зависимости от типа требуемого документа, половой принадлежности, установленного диагноза и 
                        личности трупа (опознан или нет). Эксперт, обладая этой информацией и используя возможность добавления дополнительных повреждений, может быстро составить шаблон заключения с типовыми 
                        вопросами и стандартными на них ответами. После этого он может скачать его на свой компьютер и адаптировать под индивидуальные особенности конкретного случая.
                    </h3>
                    
                </div>         
            </div> */}
            <h1 className={styles.h1Home}>Конструктор заключений по судебно-медицинской экспертизе (исследованию) трупа</h1>
            <img src={imgSlide11} alt="Экспертиза трупа" className={styles.imgHome}/>
            <NavLink className={styles.link} to='/search'><button className={styles.btnHome}>Начать работу</button></NavLink>
            <img src={imgSlide2} alt="Исследование трупа" className={styles.imgHome}/>
            {/* <h2> zzhmenka@yandex.ru</h2> */}
            <h2 className={styles.h2Home}>
                <a href="mailto:construktor-mail@yandex.ru">construktor-mail@yandex.ru</a>
            </h2>
            <img src={imgSlide33} alt="Конструктор смэ" className={styles.imgHome}/>
            <Footer></Footer>           
        </>
    );
}

export default Home;