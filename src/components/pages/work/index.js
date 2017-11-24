import React, { Component } from 'react';
import Section from '../../section/Section';
import ProcessSection from './ProcessSection';
import ProjectBanner from './ProjectBanner';
import CallToAction from './CallToAction';
import { projectItems } from '../../../constant/projectItem';

class Work extends Component {
  render() {
    return (
      <div>
        <h1>Work</h1>

        {projectItems.map(project => (
          <div key={project.key}>
            <ProjectBanner
              title={project.title}
              quote={project.caption}
              backgroundImage={project.src}
            />
          </div>
        ))}

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
