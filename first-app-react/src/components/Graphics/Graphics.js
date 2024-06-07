import './Graphics.css';
import GraphicBar from './GraphicBar';

function Graphics(props){
    // const graphic = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <ul className='diagram'>
            {props.dataSets.map(el => (<GraphicBar key={el.label} value={el.value} maxValue={props.maxValue} label={el.label}/>))}
            {/* {graphic.map((el, id) => (<GraphicBar key={Math.floor(Math.random() * 1000000)} value={'30%'} label={graphic[id]}/>))} */}
        </ul>
    )
}

export default Graphics
