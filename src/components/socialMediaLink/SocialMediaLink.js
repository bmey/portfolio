import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SocialMediaLink extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    iconComponent: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { href, iconComponent, size, title } = this.props;
    const IconComponent = iconComponent;

    return (
      <a
        href={href}
        title={title}
        aria-label={title}
        style={{ padding: "0.5rem", margin: "0 0.25rem" }}
      >
        <IconComponent size={size} aria-hidden />
      </a>
    );
  }
}
