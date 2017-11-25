import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Skill from "./Skill";

class Skills extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Skill />
          <Col xs={12} className="d-md-none d-lg-none d-xl-none">
            <hr />
          </Col>
          <Skill />
          <Col xs={12} className="d-md-none d-lg-none d-xl-none">
            <hr />
          </Col>
          <Skill />
        </Row>
      </Container>
    );
  }
}

export default Skills;
