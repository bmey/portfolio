import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class IconCarouselIndicators extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    onClickHandler: PropTypes.func.isRequired,
  };

  render() {
    const { items, activeIndex, onClickHandler } = this.props;

    const indicators = items.map((item, idx) => {
      const indicatorClasses = classNames({ active: activeIndex === idx });
      const IconComponent = item.iconComponent;
      return (
        <li
          key={item.key}
          onClick={e => {
            e.preventDefault();
            onClickHandler(idx);
          }}
          className={indicatorClasses}
          alt={item.altText}
          title={item.title}
        >
          <IconComponent size={20} />
        </li>
      );
    });

    return <ol className="icon-carousel-indicator">{indicators}</ol>;
  }
}

export default IconCarouselIndicators;
