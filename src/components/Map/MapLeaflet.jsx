import React from "react";
import L from "leaflet";
import "./map.css";
import "./images/dot-yellowt.png";
import "./images/logo_loader.jpg";
import axios from "axios";

class MapLeaflet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.panelOpen = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    //https://leaflet-extras.github.io/leaflet-providers/preview/
    const base = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    );
    const map = L.map("map", {
      layers: base,
      center: new L.LatLng(48.5, -4.5),
      zoom: 3,
    });

    let yellowDot = L.icon({
      iconUrl: "images/dot-yellowt.png",
      iconSize: [12, 12], // size of the icon
      // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62], // the same for the shadow
      // popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    axios
      .request({
        method: "GET",
        url: "https://eonet.sci.gsfc.nasa.gov/api/v3/events",
      })
      .then(function (response) {
        let events_list = response.data.events;

        events_list.forEach((event) => {
          const lat = event.geometry[0].coordinates[0];
          const lg = event.geometry[0].coordinates[1];
          if (!isNaN(lat) && !isNaN(lg)) {
            L.marker([lg, lat], { icon: yellowDot })
              .addTo(map)
              .bindPopup(
                "<h5>" +
                  event.title +
                  "</h5>.<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam magnam, cumque doloribus impedit soluta quam distinctio veritatis fugit nihil accusamus perspiciatis officia, in obcaecati laboriosam laudantium magni velit consequuntur.</p>"
              );
          }
        });

        console.log("Delete loader...");
      })
      .catch(function (error) {
        console.error(error);
      });

    // L.marker([56, -1], { icon: yellowDot }).addTo(map);
    // L.marker([42, 1], { icon: yellowDot }).addTo(map);
    // L.marker([48, 6], { icon: yellowDot }).addTo(map);
  }

  render() {
    return (
      <div id="mapContainer">
        {/* <div id="mapLoader">
          <img src="images/logo_loader.jpg" className="logo" alt="logo" />
        </div> */}
        <div id={this.props.map_id}>Map</div>
      </div>
    );
  }
}
export default MapLeaflet;
