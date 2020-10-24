import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="yellow-panel-title">
          <span>>&nbsp;</span>Contact
        </div>
        <form>
          <input type="text" id="fname" name="Name" placeholder="Your name.." />

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
      </div>
    );
  }
}
