// import CostItem from './Costitem';
import './Costs.css'
import Card from '../UI/Card';
import CostsFilter from './CostFilter';
import React, {useState} from 'react';
import CostsList from './CostsList';
import CostDiagram from './CostDiagram';

function Costs(props) {

  const [selectYear, setSelectYear] = useState('2021');

  function peredachaYearHandler(dateYear){
    setSelectYear(dateYear)
  }
  // let filterCosts = props.costs.filter(el => new Intl.DateTimeFormat('ru-RU', { year: 'numeric' }).format(el.date) === selectYear);
  let filterCosts = props.costs.filter(el => el.date.getFullYear().toString() === selectYear);
  // props.onLeng(filterCosts);//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return (
      <> 
      <div>
        <Card className='costs'>
        <CostsFilter onChangeYear={peredachaYearHandler} year={selectYear}/>
        <CostDiagram filterCosts = {filterCosts}/>
        <CostsList filterCosts = {filterCosts}/>
        </Card>  
      </div>
      </>
    );
  };
export default Costs;