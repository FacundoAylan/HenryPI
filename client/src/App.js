import './App.css';
import { Route } from 'react-router-dom'
import {Loanding} from './component/loanding/loanding.js'
import {HomePage} from './component/home/homePage'
import {Formulario} from './component/formulario'
import {CountryID} from './component/countryID/countryID'


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Loanding}/>
      <Route exact path="/countries" component={HomePage}/>
      <Route exact path="/activity/:id" component={Formulario}/>
      <Route exact path="/country/:id" component={CountryID}/>
    </div>
  );
}

export default App;
