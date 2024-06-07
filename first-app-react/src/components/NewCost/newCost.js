import './NewCost.css'
import CostForm from './CostForm';
import React, {useState} from 'react';

const NewCost = (props) => {
  const[sstate, setSstate] = useState(<button onClick={addCostForm}>Добавить новый расход</button>)

  function peredachaHandler(costData){
    const addcostData = {
      ...costData,
      id: 'a'+ Math.floor(Math.random() * 1000000)
    };
    props.onChangeCost(addcostData)
  }
  
  function addCostForm(){
    setSstate( <CostForm onChangeCost={peredachaHandler} butt={buttonHandler}/>)
  }

  function buttonHandler(){
    setSstate( <button onClick={addCostForm}>Добавить новый расход</button>)
  }
 

  return (
    <div className='new-cost'>
        {sstate}
    </div>
  );

  // return (
  //   <div className='new-cost'>
  //       <CostForm onChangeCost={peredachaHandler}/>
  //   </div>
  // );
};

export default NewCost;
