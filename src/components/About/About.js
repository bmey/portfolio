import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Skills from './Skills';
import Experiences from './Experiences';
import Section from '../Shared/Section';

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <Hero />

        <Section>
          <h2>Skills</h2>
          <Skills />
        </Section>

        <Section style={{ backgroundColor: '#ccc' }}>
          <h2>Experience</h2>
          <Experiences />
        </Section>

        <div className="section">
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
        </div>
      </div>
    );
  }
}

export default About;
