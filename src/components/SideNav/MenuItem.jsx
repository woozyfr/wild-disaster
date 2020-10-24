import React from "react";
import "./images/chevron-right-white.png";
import "./images/chevron-right-black.png";
import { NavLink } from "react-router-dom";

export default class MenuItem extends React.Component {
  /*
this.props.collapsed
*/
  render() {
    return (
      <NavLink
        to={this.props.route}
        activeClassName="selected"
        onClick={this.props.collapsedYellowPanel}
      >
        <div>{this.props.name}</div>
        <div>
          <img src="images/chevron-right-white.png" alt="" />
        </div>
      </NavLink>
    );
  }
}
