import React from "react";
import "./SideNav.css";
import "./Contact.css";
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
  //https://www.pluralsight.com/guides/react-communicating-between-components
  constructor(props) {
    super(props);
    this.state = { panel_active: false };
    this.handleClick = this.handleClick.bind(this);
    this.closePanelClick = this.closePanelClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log("Ouverture Panel");
    this.setState((state) => ({
      panel_active: !this.state.panel_active,
    }));
  }

  closePanelClick(event) {
    event.preventDefault();
    console.log("Ouverture Panel");
    this.setState((state) => ({
      panel_active: false,
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
            <span>>&nbsp;</span>Parametres
          </div>
          <div class="menu-button">
            <div
              onClick={this.handleClick}
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
          <div className="bottom-about">
            <div className="bottom-about-content"></div>
          </div>
        </div>
        <SubSideNav collapsed={this.state.panel_active}>
          <div className="right close-button" onClick={this.closePanelClick}>
            fermer
          </div>

          <div class="sidenav-second-title">
            <span>>&nbsp;</span>Contact
          </div>
          <form>
            <input
              type="text"
              id="fname"
              name="Name"
              placeholder="Your name.."
            />

            <input
              type="email"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </SubSideNav>
      </div>
    );
  }
}
export default SideNav;
