import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';

export default class ProjectDetails extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    inverseDisplayOrder: PropTypes.bool
  };

  render() {
    const { images, description, url, inverseDisplayOrder } = this.props;

    return (
      <Container className="text-center">
        <Row>
          <Col
            xs={12}
            sm={6}
            className={inverseDisplayOrder ? 'order-sm-2' : ''}
          >
            {images.map((image, index) => <span key={index}>{image}</span>)}
          </Col>
          <Col
            xs={12}
            sm={6}
            className={inverseDisplayOrder ? 'order-sm-1' : ''}
          >
            <p>{description}</p>
            <a href={url}>
              <Button>Visit</Button>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
