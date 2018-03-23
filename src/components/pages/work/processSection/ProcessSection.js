import React, { Component } from "react";
import IconCarousel from "../../../iconCarousel/IconCarousel";
import { workProcessItems } from "../../../../constant/workProcessItems";
import "./processSection.css";

export default class ProcessSection extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>How I Work</h2>

        <div className="process-content d-flex flex-column flex-md-row align-items-center">
          <IconCarousel items={workProcessItems} className="" />
          <div className="process-description-long">
            Blame the wizards! For the last time, I don't like lilacs! Your
            'first' wife was the one who liked lilacs! It's just like the story
            of the grasshopper and the octopus.
            <br />
            <br />
            All year long, the grasshopper kept burying acorns for winter, while
            the octopus mooched off his girlfriend and watched TV. But then the
            winter came, and the grasshopper died, and the octopus ate all his
            acorns.
          </div>
        </div>
      </div>
    );
  }
}
