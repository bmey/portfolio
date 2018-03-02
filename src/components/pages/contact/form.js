import React, { Component } from "react";
import sendEmail from "./sendEmail";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isFormValid: false,
  };

  handleInputChange(event) {
    const { value, name } = event.target;
    const nextFormState = { ...this.state, [name]: value };
    const isFormValid = this.isFormValid(nextFormState, this.emailInput);

    this.setState({
      [name]: value,
      isFormValid: isFormValid,
    });
  }

  isFormValid(formState, emailInput) {
    const { name, email, message } = formState;

    return (
      name.trim() && email.trim() && message.trim() && emailInput.validity.valid
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
            onChange={e => this.handleInputChange(e)}
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
            onChange={e => this.handleInputChange(e)}
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
            onChange={e => this.handleInputChange(e)}
            maxLength={500}
            aria-required="true"
          />
          <small className="text-muted">
            {500 - this.state.message.length} characters left
          </small>
        </p>

        <div
          className="g-recaptcha"
          data-sitekey="6LdDfEgUAAAAAKlhMWyiPZkXPgFVPDsSd5i7Gn61"
        />

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
