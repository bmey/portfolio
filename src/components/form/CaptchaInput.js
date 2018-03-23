import React, { Component } from "react";
import { withFormsy } from "formsy-react";
import ReCaptcha from "react-google-recaptcha";

class CaptchaInput extends Component {
  handleOnChange(value) {
    this.props.setValue(value);
  }

  render() {
    return (
      <p className="d-flex justify-content-center">
        <ReCaptcha
          sitekey="6LdDfEgUAAAAAKlhMWyiPZkXPgFVPDsSd5i7Gn61"
          onChange={value => this.handleOnChange(value)}
          className="recaptcha-container text-center"
        />
      </p>
    );
  }
}

export default withFormsy(CaptchaInput);
