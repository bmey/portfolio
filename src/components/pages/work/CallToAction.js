import React, { Component } from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

export default class CallToAction extends Component {
  render() {
    return (
      <Container className="text-center">
        <Row>
          <Col xs={12} md={6}>
            <h2>Ready to start a project?</h2>
            <p>
              Lorem ipsum dolor sit amet. Sed et posuere mauris. Etia congue
              pharetra felis.
            </p>
            <Link to="/contact">
              <Button color="primary">Contact me</Button>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <b>Still not convinced?</b>
            <p>
              Lorem ipsum dolor sit amet. Etia congue pharetra felis. Sed et
              posuere mauris.
            </p>
            <Link to="/about">Learn more about me</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
