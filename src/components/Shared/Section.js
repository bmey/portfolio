import React, { Component } from 'react';

class Section extends Component {
  render() {
    return <div class="section">{this.props.children}</div>;
  }
}

export default Section;
