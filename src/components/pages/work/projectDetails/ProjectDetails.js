import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "reactstrap";
import MdImage from "react-icons/lib/md/image";
import "./projectDetails.css";

export default class ProjectDetails extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    inverseDisplayOrder: PropTypes.bool,
  };

  render() {
    const { images, description, url, inverseDisplayOrder } = this.props;

    return (
      <div className="project-details">
        <Container fluid className="text-center">
          <Row>
            <Col
              xs={12}
              sm={6}
              className={`secondary-images d-flex align-items-center justify-content-around ${
                inverseDisplayOrder ? "order-sm-2" : ""
              }`}
            >
              {images.map((image, index) => <MdImage size={100} key={index} />)}
            </Col>
            <Col
              xs={12}
              sm={6}
              className={`call-to-action ${
                inverseDisplayOrder ? "order-sm-1" : ""
              }`}
            >
              <p>{description}</p>
              <a href={url}>
                <Button>Visit</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
