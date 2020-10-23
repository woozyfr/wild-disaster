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
          <div className="sidenav-second-container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default SubSideNav;
