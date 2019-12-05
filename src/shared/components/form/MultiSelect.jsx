import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class MultiSelectField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })),
    ]).isRequired,
  };

  static defaultProps = {
    placeholder: '',
    options: [],
  };

  handleChange = (value) => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const {
      value, name, placeholder, options,
    } = this.props;

    return (
      <Select
        isMulti
        name={name}
        value={value}
        onChange={this.handleChange}
        options={options}
        clearable={false}
        closeOnSelect={false}
        removeSelected={false}
        className="react-select"
        placeholder={placeholder}
        classNamePrefix="react-select"
      />
    );
  }
}

const renderMultiSelectField = (props) => {
  const {
    input, meta, options, placeholder,
  } = props;
  return (
    <div className="form__form-group-input-wrap">
      <MultiSelectField
        {...input}
        options={options}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
    </div>
  );
};

renderMultiSelectField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  placeholder: PropTypes.string,
};

renderMultiSelectField.defaultProps = {
  meta: null,
  options: [],
  placeholder: '',
};

export default renderMultiSelectField;
