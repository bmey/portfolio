import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import headshot from '../Shared/headshot.jpg';
import { projectItems } from '../../constant/projectItem';
import '../Shared/utility.css';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="grid-section-hero">
          <h1>Bryan Mey</h1>
          <Link to="/contact">
            <Button color="primary">Contact me</Button>
          </Link>
        </div>

        <div className="section">
          <h2>Work</h2>
          <p>
            Doomsday device? Ah, now the ball's in Farnsworth's court! I saw you
            with those two "ladies of the evening" at Elzars. Explain that. Now
            Fry, it's been a few years since medical school, so remind me.
          </p>
          <Link to="/work">
            <Button color="secondary">Learn more</Button>
          </Link>
          <Carousel items={projectItems} />
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
