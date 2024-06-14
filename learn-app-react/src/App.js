import FormUser from "./components/FormUser(ref, let)";
import PerechData from "./components/PerechData(map)";
import React, {useState} from 'react';
// import styles from './components/PerechData.module.css';

function App() {
  const[datass, setDatass] = useState([])
  function getdatas(datas){
    // let strin = <div className={styles.strin} key={Date.now()}>{datas}</div>;
    let strin = datas;
    // setDatass([...datass, strin])
    setDatass((datass) => [...datass, strin])
  }
  return (
    <>
    <FormUser onGetdatas={getdatas}/>
    <PerechData onPassdatas={datass}/> 
    </>
  );
}

export default App;
