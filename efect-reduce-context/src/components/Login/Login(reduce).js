import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";

function emailReducer(initState, action){
  if(action.type === 'New-email'){
    return {
      value: action.value,
      emailValid: action.value.includes('@')}
  }
  if(action.type === 'Valid-email'){
    return {
      value: initState.value,
      emailValid: initState.value.includes('@')}
  }
  return {
    value: '',
    emailValid: false
  }
};
function paswReduce(initState, action){
  if(action.type === 'New-passw'){
    return {
      value: action.value,
      passwValid: action.value.trim().length > 7
    }
  }
  if(action.type === 'Valid-passw'){
    return {
      value: initState.value,
      passwValid: initState.value.trim().length > 7
    }
  }
  return {
    value: '',
    passwValid: false
  }
};

const Login = (props) => {
  const[email, setEmail] = useReducer(emailReducer, {value: '', emailValid: undefined});
  // const [inputEmail, setInputEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const[passw, setPassw] = useReducer(paswReduce, {value: '', passwValid: undefined});
  // const [inputPassword, setInputPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // const emailChangeHandler = (event) => {
  //   setInputEmail(event.target.value);
  //   setFormIsValid(event.target.value.includes("@") && inputPassword.trim().length > 7);
  // };
  const emailChangeHandler = (event) => {
    setEmail({type: 'New-email', value: event.target.value});
    setFormIsValid(event.target.value.includes("@") && passw.passwValid);
  };

  // const passwordChangeHandler = (event) => {
  //   setInputPassword(event.target.value);
  //   setFormIsValid(event.target.value.trim().length > 6 && inputEmail.includes("@"));
  // };
  const passwordChangeHandler = (event) => {
    setPassw({type: 'New-passw', value: event.target.value});
    setFormIsValid(email.emailValid && event.target.value.trim().length > 7)
  };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(inputEmail.includes("@"));
  // };
  const validateEmailHandler = () => {
    setEmail({type: 'Valid-email'});
  };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(inputPassword.trim().length > 7);
  // };
  const validatePasswordHandler = () => {
    setPassw({type: 'Valid-passw'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(inputEmail, inputPassword);
    props.onLogin(email.value, passw.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            // emailIsValid === false ? styles.invalid : ""
            email.emailValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            // value={inputEmail}
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            // passwordIsValid === false ? styles.invalid : ""
            passw.passwValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            // value={inputPassword}
            value={passw.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
