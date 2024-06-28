import React, {useRef} from "react";

function Forma(props){
    const setupRef =  useRef();
    const punchlineRef =  useRef();
    const typeRef =  useRef();

    function funct(event){
        event.preventDefault();
        let massData = {
            type: typeRef.current.value,
            setup: setupRef.current.value,
            punchline: punchlineRef.current.value 
        };
        props.addFunct(massData)

    }
    return(
        <form onSubmit={funct}> 
        <label htmlFor='type'>Type</label>
          <input
            ref = {typeRef}
            type='text'
            id='type'
          />
        <label htmlFor='setup'>Setup</label>
          <input
            ref = {setupRef}
            type='textAria'
            id='setup'
          />
        <label htmlFor='punchline'>Punchline</label>
          <input
            ref = {punchlineRef}
            type='textAria'
            id='punchline'
          />
        <button type="submit">Отправить данные</button>
        </form>    
    )
}
export default Forma
