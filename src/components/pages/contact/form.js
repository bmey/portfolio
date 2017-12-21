import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    description: "",
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="d-flex flex-column text-left">
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
          <label htmlFor="description">
            What would you like to discuss? <abbr title="required">*</abbr>
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            value={this.state.firstName}
            onChange={e => this.handleInputChange(e)}
            maxLength={500}
            aria-required="true"
          />
          <small className="text-muted">
            {500 - this.state.description.length} characters left
          </small>
        </p>
      </form>
    );
  }
}
