import React from "react";
import "./SideNav.css";
import SubSideNav from "./SubSideNav";
import SideNavItem from "./SideNavItem";

const menu_list = [
  {
    name: "Choix par date",
    active: false,
  },
  {
    name: "Derrnier evement",
    active: false,
  },
  {
    name: "Type d'evement",
    active: false,
  },
];

class SideNav extends React.Component {
  //https://codepen.io/davidmellul/pen/RYEdLQ

  constructor(props) {
    super(props);
    this.state = { panel_active: false };
    this.panelOpen = this.panelOpen.bind(this);
  }

  panelOpen(event) {
    event.preventDefault();
    console.log("Ouverture Panel");
    this.setState((state) => ({
      panel_active: !this.state.panel_active,
    }));
  }

  render() {
    return (
      <div>
        <div className="sidenav">
          <div className="center">
            <img src="images/logo_wild.jpg" className="logo" alt="logo" />
          </div>
          <div class="titleParameters">
            <span>>&nbsp;</span>Parameteres
          </div>
          <div class="menu-button">
            <div
              onClick={this.panelOpen}
              className={this.state.panel_active ? "activeMenu" : ""}
            >
              Ouverture test panel
            </div>
            {menu_list.map((item) => (
              <SideNavItem
                name={item.name}
                active={item.active}
                key={item.name}
              />
            ))}
          </div>
        </div>
        <SubSideNav collapsed={this.state.panel_active} />
      </div>
    );
  }
}
export default SideNav;
