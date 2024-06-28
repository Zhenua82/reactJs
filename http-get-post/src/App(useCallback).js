import Button from "./components/Button";
import Perechen from "./components/Perechen";
import React, {useState, useEffect, useCallback} from "react";
import styles from'./index.module.css';
import Forma from "./components/Forma";

function App(props) {
  const [zad, setZad] = useState([
  ]);
  const [zagruzka, setZagruska] = useState(false)

  const ZadachaHandler = useCallback((zad) => {
    // let twoZad = zad.slice(1, 3)
      let twoZad = []
      for(let key in zad){
        twoZad.push({
          id: key,
          type: zad[key].type,
          setup: zad[key].setup,
          punchline: zad[key].punchline
        })
      }
    const but = twoZad.map((el, i) => (
      <Button type='button' key={el.id} onClick={del}>{el.setup}{el.punchline}</Button>
    ));
    setZad(but);
  }, []);
  const ZadachaHandlerr = useCallback((zad) => {
    const but = zad.map((el, i) => (
      <Button type='button' key={el + i} onClick={del}>{el}</Button>
    ));
    setZad(but);
  }, []);

   useEffect(() => {
    async function fetchData() {
      // setZagruska('Идет загрузка...');
      // const response = await fetch('https://official-joke-api.appspot.com/random_ten');
      const response = await fetch('https://react-http-3af9b-default-rtdb.firebaseio.com/jokes.json');
      const anse = await response.json();
      // setZagruska(false)
      ZadachaHandler(anse)
    }
    fetchData();
  }, [ZadachaHandler]);

  function del(event){
    event.preventDefault();
    event.target.id = Date.now();
    const buttonToRemove = document.getElementById(event.target.id);
    if (buttonToRemove) {
        buttonToRemove.remove();
    }
  };

  async function addHandler(event){
    event.preventDefault();
    setZagruska('Идет загрузка...');
    let vybork = []
    try{
    const response = await fetch('https://dummyjson.com/products/');
    if(!response.ok){
      throw new Error('Очередная ошибка в адресе!');
    }
    const anse = await response.json();
    // vybork = anse.products.slice(0, 9);
    let min = Math.random() * 27 + 1;
    vybork = anse.products.slice(min, min+3)
    
    } catch(e){
      console.error(e)
      return setZagruska(e.message)
    }
    let mass = []
    vybork.forEach(el => {
      mass.push(el.title)
    })
    setZagruska(false)
    ZadachaHandlerr(mass)
    // } catch(e){
    //   console.error(e)
    //   return setZagruska(`Ошибка ${e.message}`)
    // }
  };

  async function funct(massData){
    console.log(massData)
    // let a = {
    //   type: massData.type,
    //   setup: massData.setup,
    //   punchline: massData.punchline
    // }
    // console.log(a)
    
      const res = await fetch('https://react-http-3af9b-default-rtdb.firebaseio.com/jokes.json', {
        //Добавляем в адрес отправки узел БД(Firebase - Realtime Database) - jokes.json
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          type: massData.type,
          setup: massData.setup,
          punchline: massData.punchline
      })
      })
      // console.log(await res.json())
  }

  return (
  <> 
   <div className={styles.commun}>
    <div className='new-cost__actions'>
        <Button onClick={addHandler}>Добавить задачу</Button>
    </div>
    <h2>{zagruzka}</h2>
    <div className={styles.perech}><Perechen addZad = {zad}/></div>
   </div>
   <Forma addFunct={funct}/>
  </>)
}
export default App;
