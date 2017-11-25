import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Carousel as ReactstrapCarousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

class Carousel extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  state = {
    activeIndex: 0,
    animating: false,
  };

  onExiting() {
    this.setState({ animating: true });
  }

  onExited() {
    this.setState({ animating: false });
  }

  next(items) {
    if (this.state.animating) {
      return;
    }

    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous(items) {
    if (this.state.animating) {
      return;
    }

    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.state.animating) {
      return;
    }

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;

    return (
      <ReactstrapCarousel
        activeIndex={activeIndex}
        next={() => this.next(items)}
        previous={() => this.previous(items)}
        interval={false}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={newIndex => this.goToIndex(newIndex)}
        />

        {items.map(item => (
          <CarouselItem
            onExiting={() => this.onExiting()}
            onExited={() => this.onExited()}
            key={item.key}
            src={item.src}
            altText={item.altText}
            cssModule={{ "img-fluid": "img-fluid " + item.imageClassName }}
          >
            <div className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </CarouselItem>
        ))}

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={() => this.previous(items)}
        />

        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={() => this.next(items)}
        />
      </ReactstrapCarousel>
    );
  }
}

export default Carousel;
