import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";

const StoryIcon = props => {
  return (
    <Col xs={2} md={4} className="text-center">
      {props.children}
    </Col>
  );
};

StoryIcon.propTypes = {
  children: PropTypes.any.isRequired,
};

export default StoryIcon;
