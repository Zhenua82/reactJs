import styles from './FormPoisk.module.css'
import React, {useState} from 'react';
import Header from '../components/Header';

import { useSelector, useDispatch } from 'react-redux';
import { expNeopStatee } from '../store/index';

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
        <Header></Header>
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
                        <option value="ИБС Внезапная коронарная смерть">ИБС Внезапная коронарная смерть</option>
                        <option value="отравление нефтепродуктами">Отравление нефтепродуктами</option>
                        <option value="эксперимент">Эксперимент</option>
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
        </>
        
    );
};
export default FormPoisk;
