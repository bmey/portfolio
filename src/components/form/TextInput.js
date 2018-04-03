import React, { Component } from "react";
import PropTypes from "prop-types";
import { withFormsy } from "formsy-react";
import RequiredAbbreviation from "./RequiredAbbreviation";

class TextInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    ...this.propTypes,
  };

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
