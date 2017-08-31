import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Experience from './Experience';

class Experiences extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Experience />
        </Row>
        <Row>
          <Col xs={12} mdHidden lgHidden>
            <hr />
          </Col>
        </Row>
        <Row>
          <Experience />
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
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
            <Button>Download resume</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Experiences;
