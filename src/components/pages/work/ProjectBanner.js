import './ProjectBanner.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProjectBanner extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
  };

  render() {
    const { title, quote, backgroundImage } = this.props;

    const quoteComponent = (
      <div className="text-center">
        <span style={{ fontSize: '24px' }}>"</span>
        <span>{quote}</span>
        <span style={{ fontSize: '24px' }}>"</span>
      </div>
    );

    return (
      <div>
        <div
          className="project-banner"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2>{title}</h2>
          <div className="project-quote d-none d-sm-block">
            {quoteComponent}
          </div>
        </div>
        <div className="project-quote d-block d-sm-none">{quoteComponent}</div>
      </div>
    );
  }
}
