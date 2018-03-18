import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./contact-success.css";

class ContactSuccess extends Component {
  render() {
    return (
      <div className="contact-section-content">
        <h3>Thank you!</h3>
        <p>Lorem ipsum wouebnvowin evownbrv wermv.</p>
        <Link to="/">
          <Button color="primary">Return to home</Button>
        </Link>
      </div>
    );
  }
}

export default ContactSuccess;
