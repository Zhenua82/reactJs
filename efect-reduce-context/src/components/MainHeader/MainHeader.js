import React from "react";

import Navigation from "./Navigation(useContext)";
// import Navigation from "./Navigation(Consumer)";
// import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>React Advanced</h1>
      <Navigation
        // isLoggedIn={props.isAuthenticated} // Пропс теперь не нужен - работает context (IsLoggedInContext.Provider в App.js)
        // onLogout={props.onLogout} // Пропс теперь не нужен - работает context (IsLoggedInContext.Provider в App.js)
      />
    </header>
  );
};

export default MainHeader;
