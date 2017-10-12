import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <img src="http://lorempixel.com/g/1250/500/" alt="hero" />
        <div>
          <h1>Bryan Mey</h1>
          <Link to="/contact">
            <Button color="primary">Contact me</Button>
          </Link>
        </div>

        <div className="section">
          <h2>Work</h2>
          <img src="http://lorempixel.com/g/1250/300/" alt="project teaser" />
          <div>
            <h3>Project Name</h3>
          </div>
          <Link to="/work">
            <Button color="secondary">Learn more about my work</Button>
          </Link>
        </div>

        <div className="section" style={{ backgroundColor: '#ccc' }}>
          <h2>About</h2>
          <img src="http://lorempixel.com/400/200" alt="Bryan Mey" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc
            sed facilisis lectus. Nunc sit amet dui scelerisque, euismod arcu
            vitae, interdum leo. Nam vitae ipsum vel arcu euismod mattis id
            euismod magna. Etiam eget sem eros. Vivamus congue pharetra felis.
          </p>
          <Link to="/about">
            <Button color="secondary">Learn more about me</Button>
          </Link>
        </div>

        <div className="section">
          <h2>Want to talk?</h2>
          <p>
            Lorem ipsum dolor sit amet. Sed et posuere mauris. Nam vitae ipsum
            vel id euismod magna. Etia congue pharetra felis.
          </p>
          <Link to="/contact">
            <Button color="primary">Contact me</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
