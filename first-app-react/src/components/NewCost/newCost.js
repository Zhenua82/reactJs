import './NewCost.css'
import CostForm from './CostForm';

const NewCost = (props) => {
  function peredachaHandler(costData){
    const addcostData = {
      ...costData,
      id: 'a'+ Math.floor(Math.random() * 1000000)
    };
    props.onChangeCost(addcostData)
  }

  return (
    <div className='new-cost'>
        <CostForm onChangeCost={peredachaHandler}/>
    </div>
  );
};

export default NewCost;
