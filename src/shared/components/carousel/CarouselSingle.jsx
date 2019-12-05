import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { RTLProps } from '../../prop-types/ReducerProps';

class CarouselSingle extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    rtl: RTLProps.isRequired,
  };

  render() {
    const { children, rtl } = this.props;
    // all settings: https://github.com/akiran/react-slick
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: rtl.direction === 'rtl',
    };

    return (
      <Slider {...settings} className="slick-slider--single">
        {children}
      </Slider>
    );
  }
}

export default connect(state => ({
  rtl: state.rtl,
}))(CarouselSingle);
