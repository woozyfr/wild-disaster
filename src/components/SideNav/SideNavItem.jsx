import React from "react";
import "./images/chevron-right-white.png";
import "./images/chevron-right-black.png";
class SideNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }
  //https://codepen.io/davidmellul/pen/RYEdLQ
  handleClick(event) {
    event.preventDefault();
    console.log("Le lien a été cliqué.");
    this.setState((state) => ({
      active: !this.state.active,
    }));
  }

  render() {
    return (
      <div
        to="/"
        onClick={this.handleClick}
        activeClassName={"activeMenu"}
        className={this.state.active ? "activeMenu" : ""}
      >
        <div>{this.props.name}</div>
        <div>
          <img
            src={
              this.state.active
                ? "images/chevron-right-black.png"
                : "images/chevron-right-white.png"
            }
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default SideNavItem;
