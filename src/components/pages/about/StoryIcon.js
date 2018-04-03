import React from "react";
import { Col } from "reactstrap";

const StoryIcon = props => {
  return (
    <Col xs={2} md={4} className="text-center">
      {props.children}
    </Col>
  );
};

export default StoryIcon;
