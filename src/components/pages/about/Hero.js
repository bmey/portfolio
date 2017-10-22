import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Hero;
