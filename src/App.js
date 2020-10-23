import React from 'react';
import SideNav from './components/SideNav/SideNav';
import MapLeaflet from './components/Map/MapLeaflet';
import './App.css';

function App() {
  return (
    <div id="container">
      <SideNav />
      <MapLeaflet map_id="map" />
    </div>
  );
}

export default App;
