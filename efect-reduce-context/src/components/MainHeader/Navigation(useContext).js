import React, {useContext} from "react";

import styles from "./Navigation.module.css";
import IsLoggedInContext from "../../context/isLoggedIn";

const Navigation = (props) => {
  const context = useContext(IsLoggedInContext);
  return (
          <nav className={styles.nav}>
        <ul>
          {context.isLoggedIn && (
            <li>
              <a href="/">Пользователи</a>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <a href="/">Админ</a>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Выйти</button>
            </li>
          )}
        </ul>
      </nav>
  );
};

export default Navigation;
