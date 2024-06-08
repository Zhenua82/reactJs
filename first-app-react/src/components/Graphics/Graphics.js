import './Graphics.css';
import GraphicBar from './GraphicBar';

function Graphics(props){
    let maxValuee = props.dataSets.reduce((summ, elem) => {
        return summ += Number(elem.value);
    }, 0);

    return (
        <ul className='diagram'>
            {props.dataSets.map(el => (<GraphicBar key={el.label} value={el.value} maxValue={maxValuee} label={el.label}/>))}
        </ul>
    )
}

export default Graphics
