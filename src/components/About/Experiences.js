import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Experience from './Experience';

class Experiences extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Experience />
        </Row>
        <Row>
          <Col xs={12} className="d-md-none d-lg-none d-xl-none">
            <hr />
          </Col>
        </Row>
        <Row>
          <Experience />
        </Row>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={12}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget sem eros. Vivamus congue pharetra felis.
            </p>
          </Col>
          <Col xs={4} md={12}>
            <Button color="secondary">Download resume</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Experiences;
