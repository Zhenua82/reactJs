import './CostFilter.css';
// import React, {useState, useEffect } from 'react';

//Мой вариант:
// function CostsFilter(props){
//     const [dateYear, setDateYear] = useState('');
//     function handleChange(event){
//         setDateYear(event.target.value)
//     }
//     useEffect(() => {
//        props.onChangeYear(dateYear)
//     }, [dateYear, props]);

//     return (
//     <form className='formSelect'>
//         <label htmlFor="dropdown">Выбор по году:</label>
//         <select id="dropdown" name="options" value={dateYear} onChange={handleChange}>
//             <option value="2019">2019</option>
//             <option value="2020">2020</option>
//             <option value="2021">2021</option>
//             <option value="2022">2022</option>
//             <option value="2023">2023</option>
//             <option value="2024">2024</option>
//         </select>
//     </form>
//     )
// }

const CostsFilter = (props) => {
    const yearChangeHandler = (event) => {
      props.onChangeYear(event.target.value);
    //   console.log(props.year)
    };
  
    return (
      <div className="costs-filter">
        <div className="costs-filter__control">
          <label>Выбор По Году</label>
          <select value={props.year} onChange={yearChangeHandler}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    );
  };
export default CostsFilter