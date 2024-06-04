import CostItem from './Costitem';
import './Costs.css'
import Card from '../UI/Card';
import CostsFilter from './CostFilter';
import React, {useState} from 'react';

function Costs(props) {

  const [selectYear, setSelectYear] = useState('2021');

  function peredachaYearHandler(dateYear){
    setSelectYear(dateYear)
    // console.log(selectYear, '!!!!')//Выводит прошлый год (до его изменения)
  }
  // let filterCosts = props.costs.filter(el => new Intl.DateTimeFormat('ru-RU', { year: 'numeric' }).format(el.date) === selectYear);
  let filterCosts = props.costs.filter(el => el.date.getFullYear().toString() === selectYear);
    return (
      <> 
      <div>
        <Card className='costs'>
        <CostsFilter onChangeYear={peredachaYearHandler} year={selectYear}/>
        {filterCosts.map((el) => (<CostItem key={el.id} date={el.date} description={el.description} amount={el.amount}/>))}
        </Card>  
      </div>
      </>
    );
  };
export default Costs;