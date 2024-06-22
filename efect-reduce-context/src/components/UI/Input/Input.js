import styles from './Input.module.css';
import React, {useRef, useImperativeHandle, forwardRef, useEffect} from 'react';

function Input(props, ref){
    const inputRef =  useRef();
    //Фокусирование на полях input (сфокусируется на последнем поле):
    // useEffect(() => {
    //     inputRef.current.focus()
    // },[]);

    //Фокусирование на не валидных полях:
    function activateFocus(){
        inputRef.current.focus()
    };
    useImperativeHandle(ref, () => {
        return {
            focus: activateFocus
        }
    });

    return (
        <div className={`${styles.control} ${props.isValid === false ? styles.invalid : ""}`}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref = {inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
};
export default forwardRef(Input);