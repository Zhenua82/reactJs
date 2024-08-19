import Header from "../components/Header"
import Footer from "../components/Footer"
import imgSlideHelp1 from '../assets/slideHelp1.JPG'
import img11 from '../assets/11.png'
import img22 from '../assets/22.png'
import img33 from '../assets/33.png'
import img44 from '../assets/44.png'
import img55 from '../assets/55.png'
import styles from './Home.module.css';

import { Helmet } from 'react-helmet';

function Help(){
    return(
        <>
        <Helmet>
            <title>Конструктор заключений по смэ - Помощь</title>
            <meta
            name="description"
            content="Страница помощи конструктора заключений по судебно-медицинской экспертизе (смэ)."
            />
        </Helmet>
            <Header></Header>
            <h1 className={styles.h1Home}>Помощь в навигации:</h1>
            <img src={imgSlideHelp1} alt="Конструктор экспертиза трупа" className={styles.imgHome} />
            <div className={styles.container}>
                <div className={styles.instruct}>
                    <p >1. Для начала составления заключения нажмите на главной странице сайта на любую из обведённых красным цветом кнопок:</p>
                    <img src={img11} alt="Конструктор исследование трупа" className={styles.imgHelp} />
                </div>
                <div className={styles.instruct}>
                    <p >2.  Выберите требуемые пункты в каждом окне формы, после чего нажмите на кнопку «Составить заключение». (Примечание: в окне выбора диагноза красным цветом указаны нозологии, которые в скором времени будут добавлены в проект, но пока их нет):</p>
                    <img src={img22} alt="Судебная медицина" className={styles.imgHelp} />
                </div>
                <div className={styles.instruct}>
                    <p >3.  В составленный шаблон заключения из левого бокового меню можно дополнительно добавить требующиеся повреждения, нажимая на них:</p>
                    <img src={img33} alt="СМЭ повреждений" className={styles.imgHelp} />
                </div>
                <div className={styles.instruct}>
                    <p >4.  Добавленные в заключение повреждения подсвечиваются в боковом меню розовым цветом, а в самом заключении, в соответствующих разделах (в описании, в данных лабораторных и специальных исследований, в диагнозе, в выводах), они выделены синим цветом. Если требуется убрать какое-либо выбранное дополнительное повреждение, нужно повторно нажать на него:</p>
                    <img src={img44} alt="Давность смерти" className={styles.imgHelp} />
                </div>
                <div className={styles.instruct}>
                    <p >5.  После того как шаблон заключения составлен, для дальнейшей работы с ним его нужно сохранить на компьютер:</p>
                    <img src={img55} alt="Давность рубцов" className={styles.imgHelp} />
                </div>
                <div className={styles.instruct}>
                    <p className='red'>6.  Рекомендации при возникновении ошибок на сайте:</p>
                    <p className='red' id="MsoBodyTextIndent">Если вы столкнулись с ошибками или некорректной работой сайта, рекомендовано очистить кэш и историю вашего браузера или попробовать перейти в режим 
                        инкогнито. Это связано с тем, что вся логика сайта выполняется на стороне пользователя, и устаревшие данные в браузере могут вызывать сбои. </p> 
                        <p className='red' id="MsoBodyTextIndent"> Важно отметить: при перезагрузке страницы браузера все ранее выбранные параметры будут сброшены. Для продолжения работы их нужно будет ввести заново.</p>   
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Help