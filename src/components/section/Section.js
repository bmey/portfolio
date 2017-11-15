import React from 'react';
import './section.css';

const Section = props => {
  const backgroundClass = props.useSecondaryBackground
    ? 'secondary-background'
    : '';

  return (
    <div className={`section ${backgroundClass} ${props.className || ''}`}>
      {props.children}
    </div>
  );
};

export default Section;
