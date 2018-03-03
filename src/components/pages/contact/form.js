import React, { Component } from "react";
import sendEmail from "./sendEmail";
import ReCaptcha from "react-google-recaptcha";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    recaptcha: null,
    isFormValid: false,
  };

  handleInputChange({ value, name }) {
    this.setState((prevState, props) => {
      const tempState = { ...prevState, [name]: value };
      const isFormValid = this.isFormValid(tempState, this.emailInput);

      return {
        [name]: value,
        isFormValid: isFormValid,
      };
    });
  }

  isFormValid(nextState, emailInput) {
    const { name, email, message, recaptcha } = nextState;

    return (
      recaptcha !== null &&
      name.trim() &&
      email.trim() &&
      message.trim() &&
      emailInput.validity.valid
    );
  }

  handleSubmit(event) {
    if (this.state.isFormValid) {
      event.preventDefault();
      sendEmail(this.state);
    } else {
      console.log("invalid form");
    }
  }

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
        className="d-flex flex-column text-left"
      >
        <p className="d-flex flex-column">
          <label htmlFor="name">
            Full name: <abbr title="required">*</abbr>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => this.handleInputChange(e.target)}
            aria-required="true"
          />
        </p>

        <p className="d-flex flex-column">
          <label htmlFor="email">
            Email address: <abbr title="required">*</abbr>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            ref={input => {
              this.emailInput = input;
            }}
            value={this.state.email}
            onChange={e => this.handleInputChange(e.target)}
            aria-required="true"
          />
        </p>

        <p className="d-flex flex-column">
          <label htmlFor="message">
            What would you like to discuss? <abbr title="required">*</abbr>
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            value={this.state.firstName}
            onChange={e => this.handleInputChange(e.target)}
            maxLength={500}
            aria-required="true"
          />
          <small className="text-muted">
            {500 - this.state.message.length} characters left
          </small>
        </p>

        <p className="d-flex justify-content-center">
          <ReCaptcha
            sitekey="6LdDfEgUAAAAAKlhMWyiPZkXPgFVPDsSd5i7Gn61"
            onChange={value =>
              this.handleInputChange({ name: "recaptcha", value })
            }
            className="text-center"
          />
        </p>

        <input
          type="submit"
          disabled={!this.state.isFormValid}
          value="Send message"
          className="btn btn-primary"
        />
      </form>
    );
  }
}
