import React, { Component } from "react";
import PropTypes from "prop-types";
import "./heroSection.css";

class HeroSection extends Component {
  static propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { children, backgroundImage, className } = this.props;
    return (
      <div
        className={"section-hero " + (className || "")}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {children}
      </div>
    );
  }
}

export default HeroSection;
