import React, { Component } from "react";
import PropTypes from "prop-types";
import headshot from "../../img/headshot.jpg";
import "./headshot.css";

export default class Headshot extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  render() {
    const { size, style } = this.props;
    const sizeStyle = { height: `${size}rem` };

    return (
      <img
        src={headshot}
        alt="Bryan Mey"
        className="circular-square"
        style={{ ...sizeStyle, ...style }}
      />
    );
  }
}
