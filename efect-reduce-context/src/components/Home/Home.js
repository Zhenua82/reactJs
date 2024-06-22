import React, {useContext} from "react";

import Card from "../UI/Card/Card";
import styles from "./Home.module.css";
import Button from "../UI/Button/Button";
import IsLoggedInContext from "../../context/isLoggedIn";

const Home = (props) => {
  const cont = useContext(IsLoggedInContext)
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      {/* <Button onClick={props.onLogout}>Выход</Button> */}{/* Это все для App.js */}
      <Button onClick={cont.onLogout}>Выход</Button>{/* Это для App(contex).js */}
    </Card>
  );
};

export default Home;
