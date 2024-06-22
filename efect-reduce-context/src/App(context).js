// import Login from "./components/Login/Login(reduce, effects, alias)";
// import Login from "./components/Login/Login(input)";
import Login from "./components/Login/Login(input, useImperativeHandle)";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader(React-memo)";
import React, {useContext} from "react";
import IsLoggedInContext from "./context/isLoggedIn";

function App() {
  const cont = useContext(IsLoggedInContext)

  return (
    <>
      <MainHeader/>
      <main>
        {!cont.isLoggedIn && <Login />}
        {cont.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
