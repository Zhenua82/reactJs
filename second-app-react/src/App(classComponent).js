import Button from "./components/Button";
import React, { Component } from "react";
import Forma from "./components/Forma(styled-components)";
import Perechen from "./components/Perechen(classComponent)";
import styles from './index.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zad: [
        <Button onClick={this.del} key={Date.now() + 0} id={Date.now() + 0}>Создание курса - 1 час</Button>,
        <Button onClick={this.del} key={Date.now() + 1} id={Date.now() + 1}>Разминка 15 мин</Button>,
        <Button onClick={this.del} key={Date.now() + 2} id={Date.now() + 2}>Создание 2 курса - 1.5 час</Button>,
      ]
    };
  }
  ZadachaHandler = (zad) => {
    this.setState((prevState) => ({
      zad: [
        ...prevState.zad,
        <Button type='button' onClick={this.del} key={Date.now()} id={Date.now()}>{zad}</Button>
      ]
    }));
  };
   del = (event) => {
    event.preventDefault();
    event.target.id = Date.now();
    const buttonToRemove = document.getElementById(event.target.id);
    if (buttonToRemove) {
        buttonToRemove.remove();
    }
  };

  render() {
    return (
      <> 
        <div className={styles.commun}>
          <div className={styles['obertka_form']}><Forma onZadachaHandler={this.ZadachaHandler} /></div>
          <div className={styles.perech}>
            <Perechen addZad={this.state.zad} del={this.del} />
          </div>
        </div>
      </>
    );
  }
}

export default App;