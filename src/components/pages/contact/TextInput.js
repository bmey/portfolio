import React, { Component } from "react";
import { withFormsy } from "formsy-react";
import RequiredAbbreviation from "./RequiredAbbreviation";

class TextInput extends Component {
  handleOnChange(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const { name, type, label, required } = this.props;

    return (
      <p className="d-flex flex-column">
        <label htmlFor={name}>
          {label}
          {required && <RequiredAbbreviation />}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={this.props.getValue() || ""}
          onChange={e => this.handleOnChange(e)}
          aria-required={required}
          disabled={this.props.isFormDisabled()}
        />
        <span>{this.props.getErrorMessage()}</span>
      </p>
    );
  }
}

export default withFormsy(TextInput);
