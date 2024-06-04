import './CostForm.css'
import React, {useState} from 'react';
// import { useRef } from 'react';

const CostForm = (props) => {
    //Вариант обработчика формы через хук useState с использованием нескольких (3) состояний:
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function nameHandler(event){
        setName(event.target.value);  
    };
    function amountHandler(event){
        setAmount(event.target.value);
    };
    function dateHandler(event){
        setDate(event.target.value);
    };

    function addHandler(event){
       event.preventDefault();
       let costData = {description: name, amount: amount, date: new Date(date)};
       setName('');
       setAmount('');
       setDate('');
       //Передаем полученные из формы данные наверх:
       props.onChangeCost(costData)
    };
    //Вариант обработчика формы через хук useState с использованием одного состояния:
    // const [statForm, setStatForm] = useState({
    //     name: '', 
    //     amount: '', 
    //     date: ''});
    // function nameHandler(event){
    //     setStatForm((statForm) => {
    //         return {
    //             ...statForm,
    //             name: event.target.value
    //         }
    //         });
    // };
    // function amountHandler(event){
    //     setStatForm((statForm) => {
    //         return {
    //             ...statForm,
    //             amount: event.target.value
    //         }
    //     });
    // };
    // function dateHandler(event){
    //     setStatForm((statForm) => {
    //         return {
    //             ...statForm,
    //             date: event.target.value
    //         }
    //     });
    // };
    // function addHandler(event){
    //    event.preventDefault();
    //    let costData = {name: statForm.name, amount: statForm.amount, date: new Date(statForm.date)};
    //    props.onChangeCost(costData)
    //    setStatForm({
    //     name: '',
    //     amount: '',
    //     date: ''});
    // };

    //Вариант обработчика формы через ref:
    // const titleRef = useRef(null);
    // const amountRef = useRef(null);
    // const dateRef = useRef(null);
    // let perem = 0;
    // let peremm = 0;
    // let peremmm = 0;
    // function nameHandler(event){
    //     perem = event.target.value;
    //     return perem
    // };
    // function amountHandler(event){
    //     peremm = event.target.value;
    //     return peremm
    // };
    // function dateHandler(event){
    //     peremmm = event.target.value;
    //     return peremmm
    // };
    // function addHandler(event){
    //    event.preventDefault();
    //    let costData = {name: perem, amount: peremm, date: new Date(peremmm)};
    //    props.onChangeCost(costData);
    //    titleRef.current.value = '';
    //    amountRef.current.value = '';
    //    dateRef.current.value = '';
    // };
    return (
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input
                    type="text"
                    onChange={nameHandler}
                    value={name}
                    // value={statForm.name}
                    // ref={titleRef}
                    />
                </div>   
                <div className='new-cost__control'>
                    <label >Сумма</label>
                    <input
                    type="number"
                    min={0.01}
                    step={0.01}
                    onChange={amountHandler}
                    value={amount}
                    // value={statForm.amount}
                    // ref={amountRef}
                    />
                </div> 
                <div className='new-cost__control'>
                    <label htmlFor="date">Дата</label>
                    <input
                    type="date"
                    min='2019-01-01'
                    max='2024-06-02'
                    onChange={dateHandler}
                    value={date}
                    // value={statForm.date}
                    // ref={dateRef}
                    />
                </div>
                <div className='new-cost__actions'>
                    <button type="submit" onClick={addHandler}>Добавить Расход</button>
                </div>
            </div>
        </form>
    );
};
export default CostForm;
