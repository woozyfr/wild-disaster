import React from "react";
import "./SideNav.css";
import "./Contact.css";
import YellowPanel from "./YellowPanel";
import MenuItem from "./MenuItem";

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
    this.state = { collapsed: true };
    this.collapsedYellowPanel = this.collapsedYellowPanel.bind(this);
    this.closeYellowPanel = this.closeYellowPanel.bind(this);
  }

  collapsedYellowPanel(event) {
    this.setState((state) => ({
      collapsed: true,
    }));

    setTimeout(() => {
      this.setState((state) => ({
        collapsed: false,
      }));
    }, 390);
  }

  closeYellowPanel(event) {
    this.setState((state) => ({
      collapsed: true,
    }));
  }

  render() {
    return (
      <div>
        <div className="sidenav">
          <div className="center">
            <img src="images/logo_wild.jpg" className="logo" alt="logo" />
          </div>
          <div className="titleParameters">
            <span>>&nbsp;</span>Parametres
          </div>
          <div className="menu-button">
            {menu_list.map((item) => (
              <MenuItem
                name={item.name}
                route={item.route}
                key={item.name}
                collapsedYellowPanel={this.collapsedYellowPanel}
              />
            ))}
          </div>
          {/* <div className="bottom-about">
            <div className="bottom-about-content"></div>
          </div> */}
        </div>
        <YellowPanel
          collapsed={this.state.collapsed}
          closeYellowPanel={this.closeYellowPanel}
          collapsedYellowPanel={this.collapsedYellowPanel}
        ></YellowPanel>
      </div>
    );
  }
}
export default SideNav;
