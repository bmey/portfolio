import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Skill extends Component {
  render() {
    return (
      <Col xs={12} md={4}>
        <Row>
          <Col xs={4} md={12}>
            <img
              src="http://lorempixel.com/g/200/200/"
              aria-hidden="true"
              alt="stuff"
            />
          </Col>
          <Col xs={8} md={12}>
            <h3>Heading Level 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc
              sed facilisis lectus. Nunc sit amet dui scelerisque, euismod arcu
              vitae, interdum leo. Nam vitae ipsum vel arcu euismod mattis id
              euismod magna. Etiam eget sem eros. Vivamus congue pharetra felis.
            </p>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Skill;
