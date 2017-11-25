import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Experience extends Component {
  render() {
    return (
      <Col xs={12} md={8}>
        <Row>
          <Col xs={2}>
            <img
              src="http://lorempixel.com/g/100/100/"
              aria-hidden="true"
              alt="stuff"
            />
          </Col>
          <Col xs={10}>
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

export default Experience;
