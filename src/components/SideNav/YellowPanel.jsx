import React from "react";
import { Switch, Route } from "react-router-dom";
import ByDate from "../Pages/ByDate";
import About from "../Pages/About";
import LastEvent from "../Pages/LastEvent";
import ByCategories from "../Pages/ByCategories";
import Contact from "../Pages/Contact";

export default class YellowPanel extends React.Component {
  render() {
    return (
      <div>
        <div
          className={
            this.props.collapsed ? "sidenav-second" : "sidenav-second collapsed"
          }
        >
          <div className="right close-button" onClick={this.closePanelClick}>
            fermer
          </div>
          =
          {this.props.collapsed ? "sidenav-second" : "sidenav-second collapsed"}
          <div className="sidenav-second-container">
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/by-date" component={ByDate} />
              <Route path="/last-event" component={LastEvent} />
              <Route path="/by-categories" component={ByCategories} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
