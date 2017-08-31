import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CallToAction extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <h2>Ready to start a project?</h2>
            <p>
              Lorem ipsum dolor sit amet. Sed et posuere mauris. Etia congue
              pharetra felis.
            </p>
            <Link to="/contact">
              <Button bsStyle="primary">Contact me</Button>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <b>Still not convinced?</b>
            <p>
              Lorem ipsum dolor sit amet. Etia congue pharetra felis. Sed et
              posuere mauris.
            </p>
            <Link to="/work">Learn more about what I do</Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CallToAction;
