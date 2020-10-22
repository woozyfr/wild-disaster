import React from "react";
import "./SideNav.css";
import "./images/chevron-right-white.png";
class SideNav extends React.Component {
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
            <div>
              <div>Choix par dates</div>
              <div>
                <img src="images/chevron-right-white.png" />
              </div>
            </div>

            <div>
              <div>Derrnier evement</div>
              <div>
                <img src="images/chevron-right-white.png" />
              </div>
            </div>

            <div>
              <div>Type d'evement</div>
              <div>
                <img src="images/chevron-right-white.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="sidenav-second">
          <div className="sidenav-second-container">
            <div class="sidenav-second-title">
              <span>>&nbsp;</span>About us
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              odit. Illo, beatae debitis quasi unde impedit dicta natus
              voluptatum corporis cumque, suscipit obcaecati. Eius aliquid
              reiciendis doloremque, architecto provident incidunt?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default SideNav;
