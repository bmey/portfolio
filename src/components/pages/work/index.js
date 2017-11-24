import React, { Component } from 'react';
import Section from '../../section/Section';
import ProcessSection from './ProcessSection';
import CallToAction from './CallToAction';

class Work extends Component {
  render() {
    return (
      <div>
        <h1>Work</h1>

        <Section useSecondaryBackground>
          <ProcessSection />
        </Section>

        <Section>
          <CallToAction />
        </Section>
      </div>
    );
  }
}

export default Work;
