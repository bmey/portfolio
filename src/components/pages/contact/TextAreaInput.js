import React, { Component } from "react";
import { withFormsy } from "formsy-react";

class TextAreaInput extends Component {
  handleOnChange(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const { name, label, maxLength, required } = this.props;

    return (
      <p className="d-flex flex-column">
        <label htmlFor={name}>
          {label}
          {required && <abbr title="required">*</abbr>}
        </label>
        <input
          id={name}
          name={name}
          type="text"
          value={this.props.getValue() || ""}
          onChange={e => this.handleOnChange(e)}
          aria-required={required}
          maxLength={maxLength}
        />
        <span>{this.props.getErrorMessage()}</span>
        <small className="text-muted">
          {maxLength - (this.props.getValue() || "").length} characters left
        </small>
      </p>
    );
  }
}

export default withFormsy(TextAreaInput);
