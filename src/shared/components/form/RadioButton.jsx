/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

class RadioButtonField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    defaultChecked: PropTypes.bool,
    radioValue: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    label: '',
    defaultChecked: false,
    radioValue: '',
    disabled: false,
    className: '',
  };

  componentDidMount() {
    const { defaultChecked, onChange, radioValue } = this.props;
    if (defaultChecked) {
      onChange(radioValue);
    }
  }

  onChange = () => {
    const { onChange, radioValue } = this.props;
    onChange(radioValue);
  };

  render() {
    const {
      disabled, className, name, label, radioValue, value,
    } = this.props;
    const RadioButtonClass = classNames({
      'radio-btn': true,
      disabled,
    });

    return (
      <label
        className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}
      >
        <input
          className="radio-btn__radio"
          name={name}
          type="radio"
          onChange={this.onChange}
          checked={value === radioValue}
          disabled={disabled}
        />
        <span className="radio-btn__radio-custom" />
        {className === 'button'
          ? (
            <span className="radio-btn__label-svg">
              <CheckIcon className="radio-btn__label-check" />
              <CloseIcon className="radio-btn__label-uncheck" />
            </span>
          ) : ''}
        <span className="radio-btn__label">{label}</span>
      </label>
    );
  }
}

const renderRadioButtonField = (props) => {
  const {
    input, label, defaultChecked, disabled, className, radioValue,
  } = props;
  return (
    <RadioButtonField
      {...input}
      label={label}
      defaultChecked={defaultChecked}
      disabled={disabled}
      radioValue={radioValue}
      className={className}
    />
  );
};

renderRadioButtonField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  radioValue: PropTypes.string,
  className: PropTypes.string,
};

renderRadioButtonField.defaultProps = {
  label: '',
  defaultChecked: false,
  disabled: false,
  radioValue: '',
  className: '',
};

export default renderRadioButtonField;
