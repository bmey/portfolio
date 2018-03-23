import React, { PureComponent } from "react";

export default class RequiredAbbreviation extends PureComponent {
  render() {
    return (
      <span>
        &nbsp;<abbr title="required">*</abbr>
      </span>
    );
  }
}
