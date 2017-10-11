import React, { Component } from 'react';
import { Col } from 'reactstrap';

class StoryIcon extends Component {
  render() {
    return (
      <Col xs={2} md={4} className="text-center">
        {this.props.children}
      </Col>
    );
  }
}

export default StoryIcon;
