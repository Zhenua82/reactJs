import HeaderExp from "./components/HeaderExp";
import OtravlenieNeftM from "./pages/OtravlenieNeftM";
import OtravlenieNeftF from "./pages/OtravlenieNeftF";
import FormPoisk from "./pages/FormPoisk";
import HeaderSpec from "./components/HeaderSpec";
import Home from "./pages/Home";
import {Route, Switch, useHistory, Redirect} from 'react-router-dom';
import Spravka from "./pages/Spravka";
import Help from "./pages/Help";
import InJob from "./pages/InJob";



const App = () => {
  const history = useHistory();
  function onChangeData(dataForm){
    console.log(dataForm)
    if (dataForm.diagnoz ==='отравление' && dataForm.sex === 'мужской'){
      history.push('/otravlenieM')
    }
    else if (dataForm.diagnoz ==='отравление' && dataForm.sex === 'женский'){
      history.push('/otravlenieF')
    }
    else{history.push('/inJob')}
  }
    return (
    <>
    <Switch> 
      <Route path='/' exact>
        <Redirect to='/home'/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/search'>
        <FormPoisk onChangeData={onChangeData}></FormPoisk>
      </Route>
      <Route path='/help'>
        <Help/>
      </Route>
      <Route path='/info'>
        <Spravka/>
      </Route>

   
      <Route path='/otravlenieM'>
        <OtravlenieNeftM></OtravlenieNeftM>
      </Route>
      <Route path='/otravlenieF'>
        <OtravlenieNeftF></OtravlenieNeftF>
      </Route>
      <Route path='/inJob'>
        <InJob></InJob>
      </Route>
    </Switch>
    </>)
    };

 export default App;