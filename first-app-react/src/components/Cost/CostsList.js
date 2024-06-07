import './CostsList.css'
import CostItem from './Costitem'

function CostsList (props){
  let filterCosts = props.filterCosts
  if(filterCosts.length === 0){
    return <h2 className='cost-list__fallback'>Покупок не было</h2>
  }
    return (
        <> 
        <ul className='cost-list'>
        {/* {filterCosts.length === 0 ? <p>Покупок нет</p> : filterCosts.map((el) => (<CostItem key={el.id} date={el.date} description={el.description} amount={el.amount}/>))} */}
        {/* {filterCosts.length === 0 && <p>Покупок нет</p>}
        {filterCosts.length > 0 && filterCosts.map((el) => (<CostItem key={el.id} date={el.date} description={el.description} amount={el.amount}/>))} */}
        {filterCosts.map((el) => (<CostItem key={el.id} date={el.date} description={el.description} amount={el.amount}/>))}
        </ul>
        </>
    );
}
export default CostsList;