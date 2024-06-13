import FormUser from "./components/FormUser";
import PerechData from "./components/PerechData";
import React, {useState} from 'react';
import styles from './components/PerechData.module.css';
// import styless from './components/Poppup.module.css';
// import Poppup from "./components/Poppup";

function App() {
  const[datass, setDatass] = useState([])
  function getdatas(datas){
    let strin = <div className={styles.strin} key={Date.now()}>{datas}</div>;
    setDatass([...datass, strin])
  }
  return (
    <>
    {/* <Poppup className={styless.none}/> */}
    <FormUser onGetdatas={getdatas}/>
    <PerechData onPassdatas={datass}/> 
    </>
  );
}

export default App;
