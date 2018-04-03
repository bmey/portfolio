import React from "react";
import PropTypes from "prop-types";
import "./section.css";

const Section = props => {
  const backgroundClass = props.useSecondaryBackground
    ? "secondary-background"
    : "";

  return (
    <div className={`section ${backgroundClass} ${props.className}`}>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
  useSecondaryBackground: PropTypes.bool,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: "",
  useSecondaryBackground: false,
};

export default Section;
