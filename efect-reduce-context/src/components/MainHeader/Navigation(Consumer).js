import React from "react";

import styles from "./Navigation.module.css";
import IsLoggedInContext from "../../context/isLoggedIn";

const Navigation = (props) => {
  return (
    <IsLoggedInContext.Consumer>
      {(context) => {
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
              <button onClick={context.onLogout}>Выйти</button>
            </li>
          )}
        </ul>
      </nav>)
      }}
    </IsLoggedInContext.Consumer>
  );
};

export default Navigation;
