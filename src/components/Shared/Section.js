import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className="section" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
