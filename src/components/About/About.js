import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Bryan Mey</h1>
        <div>
          <img src="http://lorempixel.com/g/1250/500/" alt="Bryan Mey" />
        </div>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc sed
          facilisis lectus. Nunc sit amet dui scelerisque, euismod arcu vitae,
          interdum leo. Nam vitae ipsum vel arcu euismod mattis id euismod
          magna. Etiam eget sem eros. Vivamus congue pharetra felis."
        </p>

        <div className="section">
          <h2>Skills</h2>
          <Grid>
            <Row>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce bibendum lorem nec maximus venenatis. Sed et posuere
                      mauris. Nunc sed facilisis lectus. Nunc sit amet dui
                      scelerisque, euismod arcu vitae, interdum leo. Nam vitae
                      ipsum vel arcu euismod mattis id euismod magna. Etiam eget
                      sem eros. Vivamus congue pharetra felis.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} mdHidden lgHidden>
                <hr />
              </Col>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce bibendum lorem nec maximus venenatis. Sed et posuere
                      mauris. Nunc sed facilisis lectus. Nunc sit amet dui
                      scelerisque, euismod arcu vitae, interdum leo. Nam vitae
                      ipsum vel arcu euismod mattis id euismod magna. Etiam eget
                      sem eros. Vivamus congue pharetra felis.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} mdHidden lgHidden>
                <hr />
              </Col>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce bibendum lorem nec maximus venenatis. Sed et posuere
                      mauris. Nunc sed facilisis lectus. Nunc sit amet dui
                      scelerisque, euismod arcu vitae, interdum leo. Nam vitae
                      ipsum vel arcu euismod mattis id euismod magna. Etiam eget
                      sem eros. Vivamus congue pharetra felis.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>

        <div className="section" style={{ backgroundColor: '#ccc' }}>
          <h2>Experience</h2>
          <Grid>
            <Row>
              <Col xs={12} md={8} mdOffset={2}>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce bibendum lorem nec maximus venenatis. Sed et posuere
                    mauris. Nunc sed facilisis lectus. Nunc sit amet dui
                    scelerisque, euismod arcu vitae, interdum leo. Nam vitae
                    ipsum vel arcu euismod mattis id euismod magna. Etiam eget
                    sem eros. Vivamus congue pharetra felis.
                  </p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col xs={12} mdHidden lgHidden>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8} mdOffset={2}>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce bibendum lorem nec maximus venenatis. Sed et posuere
                    mauris. Nunc sed facilisis lectus. Nunc sit amet dui
                    scelerisque, euismod arcu vitae, interdum leo. Nam vitae
                    ipsum vel arcu euismod mattis id euismod magna. Etiam eget
                    sem eros. Vivamus congue pharetra felis.
                  </p>
                </Col>
              </Col>
              <Col xs={12} md={8} mdOffset={2}>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col xs={8} md={12}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  bibendum lorem nec maximus venenatis. Sed et posuere mauris.
                  Nunc sed facilisis lectus. Nunc sit amet dui scelerisque,
                  euismod arcu vitae, interdum leo. Nam vitae ipsum vel arcu
                  euismod mattis id euismod magna. Etiam eget sem eros. Vivamus
                  congue pharetra felis.
                </p>
              </Col>
              <Col xs={4} md={12}>
                <Button>Download resume</Button>
              </Col>
            </Row>
          </Grid>
        </div>

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
