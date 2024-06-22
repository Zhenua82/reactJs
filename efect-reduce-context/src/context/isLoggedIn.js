import React, {useState, useEffect} from "react";

const IsLoggedInContext = React.createContext({
    isLoggedIn: false,
    onLogout: () =>{},
    onLogin: function(email, password){},//Это все для App(contex).js:
});

export function IsLoggedInContextProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    return <IsLoggedInContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler,}}>
        {props.children}
        </IsLoggedInContext.Provider>

}

export default IsLoggedInContext