import React, { PureComponent } from 'react';
import { ChromePicker } from 'react-color';
import { Popover } from 'reactstrap';
import PropTypes from 'prop-types';

class ChromeColorPickerField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
      color: '#70bbfd',
      rgb: {
        r: 112, g: 187, b: 253, a: 1,
      },
      active: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ displayColorPicker: !prevState.displayColorPicker, active: !prevState.active }));
  };

  handleChange = (color) => {
    const { onChange } = this.props;
    this.setState({ color: color.hex, rgb: color.rgb });
    onChange(color);
  };

  render() {
    const { name } = this.props;

    const {
      active, color, displayColorPicker, rgb,
    } = this.state;

    return (
      <div className="color-picker">
        <button
          type="button"
          className={`color-picker__button${active ? ' active' : ''}`}
          onClick={this.handleClick}
          id={name}
        >
          <p className="color-picker__color">{color}</p>
          <div className="color-picker__color-view" style={{ backgroundColor: color }} />
        </button>
        <Popover
          isOpen={displayColorPicker}
          target={name}
          placement="bottom"
          className="color-picker__popover"
        >
          <ChromePicker
            color={rgb}
            onChange={this.handleChange}
          />
        </Popover>
      </div>
    );
  }
}

const renderChromeColorPickerField = (props) => {
  const { input, meta } = props;
  return (
    <div className="form__form-group-input-wrap">
      <ChromeColorPickerField {...input} />
      {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
    </div>
  );
};

renderChromeColorPickerField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderChromeColorPickerField.defaultProps = {
  meta: null,
};

export default renderChromeColorPickerField;
