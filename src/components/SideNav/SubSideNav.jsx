import React from "react";

class SubSideNav extends React.Component {
  render() {
    return (
      <div>
        <div
          className={
            this.props.collapsed ? "sidenav-second" : "sidenav-second collapsed"
          }
        >
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
export default SubSideNav;
