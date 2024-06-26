import React, { useState, useReducer, useEffect, useContext } from "react";
import IsLoggedInContext from "../../context/isLoggedIn";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

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
  const[passw, setPassw] = useReducer(paswReduce, {value: '', passwValid: undefined});
  const [formIsValid, setFormIsValid] = useState(false);
  //Деструктуризация c alias - её делаем чтобы не постоянно отслеживать состояние 
  //кнопки (setFormIsValid), а только при изменении состояний полей input:
  // email.emailValid и passw.passwValid:
  const {emailValid: emailAlias} = email;
  const {passwValid: passwAlias} = passw;
  const contt = useContext(IsLoggedInContext);//Это для App(contex).js:

  //useEffect с функцией очистки и с alias:
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        emailAlias && passwAlias)
  }, 1000);
  return () => {clearTimeout(timer)}
},[emailAlias, passwAlias]);
//useEffect без функциии очистки и без alias:
  // useEffect(() => {
  //   setFormIsValid(email.emailValid && passw.passwValid)},[email.emailValid, passw.passwValid]);

  const emailChangeHandler = (event) => {
    setEmail({type: 'New-email', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    setPassw({type: 'New-passw', value: event.target.value});
  };

  const validateEmailHandler = () => {
    setEmail({type: 'Valid-email'});
  };

  const validatePasswordHandler = () => {
    setPassw({type: 'Valid-passw'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(email.value, passw.value);//Это для App.js:
    contt.onLogin(email.value, passw.value);//Это для App(contex).js:
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input 
          isValid= {email.emailValid}
          label = 'Email'
          type="email"
          id="email"
          value={email.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
            isValid= {passw.passwValid}
            label ='Пароль'
            type="password"
            id="password"
            value={passw.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
        />
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
