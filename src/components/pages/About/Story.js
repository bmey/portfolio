import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StoryIcon from './StoryIcon';

const interestIcons = ['1', '2', '3'];
const personalIcons = ['4', '5', '6'];

class Story extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Row className="d-xs-none d-sm-none d-md-flex">
              {interestIcons.map((icon, index) => (
                <StoryIcon key={index}>{icon}</StoryIcon>
              ))}
            </Row>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc
              sed facilisis lectus. Nunc sit amet dui scelerisque, euismod arcu
              vitae, interdum leo. Nam vitae ipsum vel arcu euismod mattis id
              euismod magna. Etiam eget sem eros. Vivamus congue pharetra felis.
            </div>
          </Col>
          <Col xs={12} className="d-md-none d-lg-none d-xl-none">
            <Row>
              {interestIcons.map((icon, index) => (
                <StoryIcon key={index}>{icon}</StoryIcon>
              ))}
              {personalIcons.map((icon, index) => (
                <StoryIcon key={index}>{icon}</StoryIcon>
              ))}
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc
              sed facilisis lectus. Nunc sit amet dui scelerisque, euismod arcu
              vitae, interdum leo. Nam vitae ipsum vel arcu euismod mattis id
              euismod magna. Etiam eget sem eros. Vivamus congue pharetra felis.
            </div>
            <Row className="d-xs-none d-sm-none d-md-flex">
              {personalIcons.map((icon, index) => (
                <StoryIcon key={index}>{icon}</StoryIcon>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Story;
