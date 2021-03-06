import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Carousel from "../../carousel/Carousel";
import Headshot from "../../headshot/Headshot";
import { headshotSize } from "../../../constant/sizes";
import heroImage from "../../../img/splash-1250x500.jpg";
import Section from "../../section/Section";
import HeroSection from "../../heroSection/HeroSection";
import { projectItems } from "../../../constant/projectItem";
import "./home.css";
import "./work.css";

class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <HeroSection className="home" backgroundImage={heroImage}>
          <h1>Bryan Mey</h1>
          <Link to="/contact">
            <Button color="primary">Contact me</Button>
          </Link>
        </HeroSection>

        <Section className="work">
          <h2>Work</h2>
          <div className="grid-section-work">
            <div className="caption">
              Doomsday device? Ah, now the ball's in Farnsworth's court! I saw
              you with those two "ladies of the evening" at Elzars. Explain
              that. Now Fry, it's been a few years since medical school, so
              remind me.
            </div>
            <Link to="/work" className="cta">
              <Button color="secondary">Learn more</Button>
            </Link>
            <Carousel
              items={projectItems}
              cssModule={{ carousel: "item-main" }}
            />
          </div>
        </Section>

        <Section useSecondaryBackground>
          <h2>About</h2>
          <div className="grid-section-about">
            <Headshot size={headshotSize} />
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
        </Section>

        <Section>
          <h2>Want to talk?</h2>
          <p>
            Lorem ipsum dolor sit amet. Sed et posuere mauris. Nam vitae ipsum
            vel id euismod magna. Etia congue pharetra felis.
          </p>
          <Link to="/contact">
            <Button color="primary">Contact me</Button>
          </Link>
        </Section>
      </div>
    );
  }
}

export default Home;
