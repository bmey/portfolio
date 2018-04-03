import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Formsy from "formsy-react";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import CaptchaInput from "./CaptchaInput";

const MAX_EMAIL_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 500;

export default class FormPresentation extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    onInvalid: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    onValidSubmit: PropTypes.func.isRequired,
    submitDisabled: PropTypes.bool.isRequired,
    submitInProgress: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Formsy
        onValidSubmit={this.props.onValidSubmit}
        onValid={this.props.onValid}
        onInvalid={this.props.onInvalid}
        disabled={this.props.disabled}
        className="d-flex flex-column text-left"
      >
        <TextInput label="Full name:" name="name" type="text" required />

        <TextInput
          label="Email address:"
          name="email"
          type="email"
          required
          validations={{
            isEmail: true,
            maxLength: MAX_EMAIL_LENGTH,
          }}
          validationErrors={{
            isEmail: "Please enter a valid email",
            maxLength: `Email must be no more than ${MAX_EMAIL_LENGTH} characters`,
          }}
        />

        <TextAreaInput
          label="What would you like to discuss?"
          name="message"
          required
          maxLength={MAX_MESSAGE_LENGTH}
          validations={{
            maxLength: MAX_MESSAGE_LENGTH,
          }}
          validationErrors={{
            maxLength: `Message must be no more than ${MAX_MESSAGE_LENGTH} characters`,
          }}
        />

        <CaptchaInput required name="captcha" />

        <input
          type="submit"
          disabled={this.props.submitDisabled}
          className="btn btn-primary"
          value={
            this.props.submitInProgress ? "Sending message..." : "Send message"
          }
        />
      </Formsy>
    );
  }
}
