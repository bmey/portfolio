import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Skill from './Skill';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Skill />
          <Col xs={12} mdHidden lgHidden>
            <hr />
          </Col>
          <Skill />
          <Col xs={12} mdHidden lgHidden>
            <hr />
          </Col>
          <Skill />
        </Row>
      </Grid>
    );
  }
}

export default Skills;
