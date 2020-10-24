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
          id="yellow-panel"
          className={!this.props.collapsed ? "" : "collapsed"} //
        >
          <div
            className="right close-button"
            onClick={this.props.closeYellowPanel}
          >
            fermer
          </div>

          <div className="yellow-panel-container">
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
