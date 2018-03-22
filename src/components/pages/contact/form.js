import React, { Component } from "react";
import Formsy from "formsy-react";
import sendEmail from "./sendEmail";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import CaptchaInput from "./CaptchaInput";

export default class Form extends Component {
  state = {
    canSubmitForm: false,
    submitInProgress: false,
  };

  setCanSubmitForm(isFormValid) {
    this.setState({ canSubmitForm: isFormValid });
  }

  handleSubmitSuccess() {
    this.props.onSubmit();
  }

  handleSubmitFailed() {
    this.setState({ submitInProgress: false });
  }

  handleSubmit(model) {
    this.setState({ submitInProgress: true }, () => {
      sendEmail(model).then(
        () => this.handleSubmitSuccess(),
        () => this.handleSubmitFailed()
      );
    });
  }

  render() {
    return (
      <Formsy
        onValidSubmit={model => this.handleSubmit(model)}
        onValid={() => this.setCanSubmitForm(true)}
        onInvalid={() => this.setCanSubmitForm(false)}
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
            maxLength: 50,
          }}
          validationErrors={{
            isEmail: "Please enter a valid email",
            maxLength: "Email must be no more than 50 characters",
          }}
        />

        <TextAreaInput
          label="What would you like to discuss?"
          name="message"
          required
          maxLength={500}
          validations={{
            maxLength: 500,
          }}
          validationErrors={{
            maxLength: "Message must be no more than 500 characters",
          }}
        />

        <CaptchaInput required name="captcha" />

        <input
          type="submit"
          disabled={!this.state.canSubmitForm || this.state.submitInProgress}
          value={
            this.state.submitInProgress ? "Sending message..." : "Send message"
          }
          className="btn btn-primary"
        />
      </Formsy>
    );
  }
}
