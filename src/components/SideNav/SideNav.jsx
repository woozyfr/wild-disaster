import React from "react";
import "./SideNav.css";
import "./Contact.css";
import SubSideNav from "./SubSideNav";
import SideNavItem from "./SideNavItem";

const menu_list = [
  {
    name: "Choix par date",
    route: "/by-date",
  },
  {
    name: "Derrnier evement",
    route: "/last-event",
  },
  {
    name: "Type d'evement",
    route: "/by-categories",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { panel_status: true };
    this.collapsed = this.collapsed.bind(this);
  }

  // handler() {
  //   this.setState({
  //     panel_status: !this.state.panel_status,
  //   });
  // }

  collapsed(event) {
    this.setState((state) => ({
      panel_status: !this.state.panel_status,
    }));
  }

  // closeYellowPanel(event) {
  //   this.setState((state) => ({
  //     panel_active: false,
  //   }));
  // }

  render() {
    return (
      <div>
        <div className="sidenav">
          <div className="center">
            <img src="images/logo_wild.jpg" className="logo" alt="logo" />
          </div>
          <div class="titleParameters">
            <span>>&nbsp;</span>Parametres
          </div>
          <div class="menu-button">
            {menu_list.map((item) => (
              <SideNavItem
                name={item.name}
                route={item.route}
                key={item.name}
              />
            ))}
          </div>
          <div className="bottom-about">
            <div className="bottom-about-content"></div>
          </div>
        </div>
        <SubSideNav collapsed={this.openYellowPanel}></SubSideNav>
      </div>
    );
  }
}
export default SideNav;
