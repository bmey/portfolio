import React, { Component } from "react";
import sendEmail from "./sendEmail";
import FormPresentation from "./FormPresentation";

export default class FormContainer extends Component {
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
      <FormPresentation
        onValidSubmit={model => this.handleSubmit(model)}
        onValid={() => this.setCanSubmitForm(true)}
        onInvalid={() => this.setCanSubmitForm(false)}
        disabled={this.state.submitInProgress}
        submitInProgress={this.state.submitInProgress}
        submitDisabled={
          !this.state.canSubmitForm || this.state.submitInProgress
        }
      />
    );
  }
}
