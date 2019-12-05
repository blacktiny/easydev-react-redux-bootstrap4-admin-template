/* eslint-disable prefer-destructuring */
import 'rc-slider/assets/index.css';
import React, { PureComponent } from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

const Handle = Slider.Handle;

const handle = ({ value, index, ...restProps }) => (
  <Tooltip
    prefixCls="rc-slider-tooltip"
    overlay={value}
    visible
    placement="top"
    key={index}
  >
    <Handle value={value} {...restProps} dragging={undefined} />
  </Tooltip>
);


handle.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default class SliderTheme extends PureComponent {
  static propTypes = {
    marks: PropTypes.shape(),
    value: PropTypes.number,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    tipFormatter: PropTypes.func,
  };

  static defaultProps = {
    marks: {},
    value: 0,
    tipFormatter: value => value,
  };

  render() {
    const {
      marks, value, min, max, tipFormatter,
    } = this.props;

    return (
      <div className="slider">
        <div className="slider__min">
          <p>{tipFormatter ? tipFormatter(min) : min}</p>
        </div>
        <div className="slider__max">
          <p>{tipFormatter ? tipFormatter(max) : max}</p>
        </div>
        <Slider
          min={min}
          max={max}
          defaultValue={value}
          handle={handle}
          marks={marks}
          tipFormatter={tipFormatter}
        />
      </div>
    );
  }
}
