import React from 'react';
import SideNav from './components/SideNav/SideNav';
import MapLeaflet from './components/Map/MapLeaflet';
// import ByDate from './components/Pages/ByDate';
// import About from './components/Pages/About';
// import ByCategories from './components/Pages/ByCategories';
// import Contact from './components/Pages/Contact';
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
            <Route path='/contact' component={Contact} />
            <Route path='/by-date' component={ByDate} />
            <Route path='/by-categories' component={ByCategories} />
            <Route path='/about' component={About} />
          </Switch>
        </Router>
*/
export default App;
