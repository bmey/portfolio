import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel as ReactstrapCarousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next(items) {
    if (this.animating) {
      return;
    }

    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous(items) {
    if (this.animating) {
      return;
    }

    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) {
      return;
    }

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
          cssModule={{ 'img-fluid': 'img-fluid ' + item.imageClassName }}
        >
          <div className="carousel-caption">
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </div>
        </CarouselItem>
      );
    });

    return (
      <ReactstrapCarousel
        activeIndex={activeIndex}
        next={() => {
          this.next(items);
        }}
        previous={() => {
          this.previous(items);
        }}
        interval={false}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={() => {
            this.previous(items);
          }}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={() => {
            this.next(items);
          }}
        />
      </ReactstrapCarousel>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired
};

export default Carousel;
