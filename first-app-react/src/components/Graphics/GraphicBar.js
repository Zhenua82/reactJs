import './GraphicBar.css'

function GraphicBar(props){
    let barFill = '0%'
    if (props.maxValue > 0){
        barFill = Math.round(props.value / props.maxValue * 100) + '%'
    }
    return (
        <li className='diagram-bar' key={props.label}>
            <div className='diagram-bar__inner'>
                <div className='diagram-bar__fill' style={{height: barFill}}></div> 
            </div>
            <div className='diagram-bar__label'>{props.label}</div>
            
        </li>
    )
}
export default GraphicBar