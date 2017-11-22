import React, { Component } from 'react';
import Skills from './Skills';
import Experiences from './Experiences';
import Story from './Story';
import CallToAction from './CallToAction';
import Section from '../../section/Section';
import HeroSection from '../../section-hero';
import heroImage from '../../../img/splash-1250x500.jpg';
import './section-hero.css';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div className="text-center">
          <HeroSection className="about section" backgroundImage={heroImage}>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum lorem nec maximus venenatis. Sed et posuere mauris. Nunc
              sed facilisis lectus. Nunc sit amet dui scelerisque."
            </p>
          </HeroSection>

          <Section>
            <h2>Skills</h2>
            <Skills />
          </Section>

          <Section useSecondaryBackground>
            <h2>Experience</h2>
            <Experiences />
          </Section>

          <Section>
            <h2>My Story</h2>
            <Story />
          </Section>

          <Section useSecondaryBackground>
            <CallToAction />
          </Section>
        </div>
      </div>
    );
  }
}

export default About;
