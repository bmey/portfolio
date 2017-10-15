import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import headshot from '../Shared/headshot.jpg';
import '../Shared/utility.css';
import './Home.css';

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

        <div style={{ backgroundColor: '#ccc', padding: '20px 30px 30px' }}>
          <h2>About</h2>
          <div className="grid-section-about">
            <img
              src={headshot}
              alt="Bryan Mey"
              className="circular-square"
              style={{ height: '100px' }}
            />
            <div className="item-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc
              sed facilisis lectus. Nunc sit amet dui scelerisque, euismod
              magna. Etiam eget sem eros. Vivamus congue pharetra felis.
            </div>
            <Link to="/about">
              <Button color="secondary">Learn more about me</Button>
            </Link>
          </div>
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
