import HeaderExp from "./components/HeaderExp";
import OtravlenieNeftM from "./pages/OtravlenieNeftM";
import OtravlenieNeftF from "./pages/OtravlenieNeftF";
import FormPoisk from "./pages/FormPoisk";
import HeaderSpec from "./components/HeaderSpec";
import Home from "./pages/Home";
import {Route, Switch, useHistory} from 'react-router-dom';



const App = () => {
  const history = useHistory();
  function onChangeData(dataForm){
    console.log(dataForm)
    if (dataForm.diagnoz ==='отравление' && dataForm.sex === 'мужской'){
      history.push('/otravlenieM')
    }
    if (dataForm.diagnoz ==='отравление' && dataForm.sex === 'женский'){
      history.push('/otravlenieF')
    }
  }
    return (
    <>
    <Switch> 
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/search'>
        <FormPoisk onChangeData={onChangeData}></FormPoisk>
      </Route>
      <Route path='/otravlenieM'>
        <OtravlenieNeftM></OtravlenieNeftM>
      </Route>
      <Route path='/otravlenieF'>
        <OtravlenieNeftF></OtravlenieNeftF>
      </Route>
    </Switch>
      {/* <Home/>
      <FormPoisk onChangeData={onChangeData}></FormPoisk>
      <HeaderExp></HeaderExp>
      <HeaderSpec></HeaderSpec>
      <OtravlenieNeftM></OtravlenieNeftM>
      <OtravlenieNeftF></OtravlenieNeftF>   */}
    </>)
    };

 export default App;