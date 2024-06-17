import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login(reduce, effects, alias)";
// import Login from "./components/Login/Login(reduce)";
// import Login from "./components/Login/Login(state, effects)";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import IsLoggedInContext from "./context/isLoggedIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

//Эта безымянная функция выполнится только 1 раз при запуске функции App и далее выполнятся не будет т.к. у нее нет зависимостей:
  useEffect(() => {
    const local = localStorage.getItem('key');
    if (local === '1'){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {
    localStorage.setItem('key', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('key');
    setIsLoggedIn(false);
  };

  return (
      <IsLoggedInContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>{/* Оборачиваем все в context - чтобы можно было обходиться без цепочки пропсов */}
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
      {/* Пропсы isAuthenticated={isLoggedIn} и onLogout={logoutHandler} теперь не нужены - работает IsLoggedInContext.Provider */}
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </IsLoggedInContext.Provider>
  );
}

export default App;
