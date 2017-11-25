import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class ProcessSection extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>How I Work</h2>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div>Icon Carousel</div>
            </Col>
            <Col xs={12} md={6}>
              <p>Lorem Ipsum!</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
