import React from 'react';
import SideNav from './components/SideNav/SideNav';
import MapLeaflet from './components/Map/MapLeaflet';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div id="container">
      <SideNav />
      <MapLeaflet map_id="map"/>

     
    </div>
  );
}
/*
   <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/reservations' component={Reservations} />
            <Route path='/choix-pays' component={ChoixPays} />
            <Route path='/pays/:country_slug' component={Country} />
          </Switch>
        </Router>
*/
export default App;
