import React, { Component } from "react";
import sendEmail from "./submitForm";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  isFormValid() {
    const { name, email, message } = this.state;
    return (
      name.length > 0 &&
      !name.trim() &&
      email.length > 0 &&
      !email.trim() &&
      message.length > 0 &&
      !message.trim()
    );
  }

  handleSubmit(event) {
    if (this.isFormValid()) {
      event.preventDefault();
      sendEmail(this.state);
      console.log("valid form. sending mail...");
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
          disabled={this.state.isFormValid}
          value="Send message"
          className="btn btn-primary"
        />
      </form>
    );
  }
}
