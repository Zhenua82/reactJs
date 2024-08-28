import styles from './FormPoisk.module.css'
import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { expNeopStatee } from '../store/index';

import { Helmet } from 'react-helmet';

const FormPoisk = (props) => {
    // const exp = useSelector((state) => state.expNeopState.exp);
    // const neop = useSelector((state) => state.expNeopState.neop);
    const dispatchFunction = useDispatch();
    
    const [vid, setVid] = useState('');
    const [diagnoz, setDiagnoz] = useState('');
    const [sex, setSex] = useState('');
    const [izvesten, setIzvesten] = useState('');
    const [invalidFields, setInvalidFields] = useState({});

    function vidHandler(event) {
        setVid(event.target.value);
        if (event.target.value) {
            setInvalidFields((prev) => ({ ...prev, vid: false }));
        }
    };

    function diagnozHandler(event) {
        setDiagnoz(event.target.value);
        if (event.target.value) {
            setInvalidFields((prev) => ({ ...prev, diagnoz: false }));
        }
    };

    function sexHandler(event) {
        setSex(event.target.value);
        if (event.target.value) {
            setInvalidFields((prev) => ({ ...prev, sex: false }));
        }
    };

    function izvestenHandler(event) {
        setIzvesten(event.target.value);
        if (event.target.value) {
            setInvalidFields((prev) => ({ ...prev, izvesten: false }));
        }
    };

    function addHandler(event) {
        event.preventDefault();
        const newInvalidFields = {};
        if (!vid) newInvalidFields.vid = true;
        if (!diagnoz) newInvalidFields.diagnoz = true;
        if (!sex) newInvalidFields.sex = true;
        if (!izvesten) newInvalidFields.izvesten = true;
        if (Object.keys(newInvalidFields).length > 0) {
            setInvalidFields(newInvalidFields);
            return;
        }
        let dataForm = { vid: vid, diagnoz: diagnoz, sex: sex, izvesten: izvesten };
        setVid('');
        setDiagnoz('');
        setSex('');
        setIzvesten('');
        setInvalidFields({});
        // Передаем полученные из формы данные наверх:
        props.onChangeData(dataForm);
        //Передаем состояние вида исследования, личности трупа и пола в хранилище:
        dispatchFunction(expNeopStatee.exp(dataForm.vid));
        dispatchFunction(expNeopStatee.neop(dataForm.izvesten)); 
        dispatchFunction(expNeopStatee.sex(dataForm.sex));
    };

    return (
        <>
        <Helmet>
            <title>Конструктор заключений по смэ - Поиск</title>
            <meta
            name="description"
            content="Страница поиска в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
            />
        </Helmet>
        <Header></Header>
        <h1 className='h1Home'>Конструктор заключений</h1>
        <form>
            <div className={styles.commun}>
                
                <div className={styles.exemp}>
                    <label>Вид оформляемого документа</label>
                    <select onChange={vidHandler} value={vid} className={invalidFields.vid ? styles.invalid : ''}>
                        <option value="">Выберите вид оформляемого документа</option>
                        <option value="заключение эксперта">Заключение эксперта</option>
                        <option value="заключение специалиста">Заключение специалиста</option>
                    </select>
                </div> 
                <div className={styles.exemp}>
                    <label>Судебно-медицинский диагноз</label>
                    <select onChange={diagnozHandler} value={diagnoz} className={invalidFields.diagnoz ? styles.invalid : ''}>
                        <option value="">Выберите диагноз</option>
                        
                        <option value="отравление бутиролактоном">Oтравление бутиролактоном</option>
                        <option value="отравление нефтепродуктами">Отравление нефтепродуктами</option>                      
                        <option value="отравление этиленгликолем">Отравление этиленгликолем</option>  
                        <option value="ИБС Внезапная коронарная смерть">ИБС Внезапная коронарная смерть</option>
                        <option value="ишемический инсульт ГМ">Ишемический инсульт ГМ</option>
                        <option value="ЧМТ">ЧМТ</option>
                        <option value="повешение">Повешение</option>
                        <option value="поражение техническим электричеством">Поражение техническим электричеством</option>                     
                        <option value="авиационная травма" className='red'>Авиационная травма</option>                      
                        <option value="автомобильная травма (пешеход)" className='red'>Автомобильная травма (пешеход)</option>                     
                        <option value="автомобильная травма (водитель)" className='red'>Автомобильная травма (водитель)</option>                    
                        <option value="автомобильная травма (пассажир)" className='red'>Автомобильная травма (пассажир)</option>                                                             
                        <option value="колото-резаное ранение груди" className='red'>Колото-резаное ранение груди</option>                   
                        <option value="множественные огнестрельные ранения груди" className='red'>Множественные огнестрельные ранения груди</option>                
                        <option value="одиночное огнестрельное ранение груди" className='red'>Одиночное огнестрельное ранение груди</option>                
                        <option value="одиночное огнестрельное ранение головы" className='red'>Одиночное огнестрельное ранение головы</option>                              
                        <option value="падение с высоты + переохлаждение" className='red'>Падение с высоты + переохлаждение</option>                                     
                        <option value="рак предстательной железы" className='red'>Рак предстательной железы</option>
                        <option value="термические ожоги + отравление СО" className='red'>Термические ожоги + отравление СО</option>
                        <option value="тромбофлебит глубоких вен н/к, ТЭЛА" className='red'>Tромбофлебит глубоких вен н/к, ТЭЛА</option>
                        <option value="тупая травма живота" className='red'>Тупая травма живота</option>
                        <option value="утопление в воде" className='red'>Утопление в воде</option>
                        

                        {/* <option value="эксперимент">Эксперимент</option> */}
                    </select>
                </div> 
                <div className={styles.exemp}>
                    <label>Пол</label>
                    <select onChange={sexHandler} value={sex} className={invalidFields.sex ? styles.invalid : ''}>
                        <option value="">Выберите пол</option>
                        <option value="мужской">Мужской</option>
                        <option value="женский">Женский</option>
                    </select>
                </div>
                <div className={styles.exemp}>
                    <label>Личность трупа</label>
                    <select onChange={izvestenHandler} value={izvesten} className={invalidFields.izvesten ? styles.invalid : ''}>
                        <option value="">Труп опознан или нет</option>
                        <option value="известен">да</option>
                        <option value="неизвестен">нет</option>
                    </select>
                </div>
                <div className={styles.buttonForm}>
                    <button type="submit" onClick={addHandler}>Составить заключение</button>
                </div>
            </div>
        </form>
        <Footer/>
        </>
        
    );
};
export default FormPoisk;
