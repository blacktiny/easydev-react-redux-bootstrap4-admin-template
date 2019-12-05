import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectOption = ({
  innerProps, isDisabled, data,
}) => (!isDisabled ? (
  <div
    className="react-select__option"
    {...innerProps}
  >
    {data.label}
    <span
      className="react-select__color"
      style={{ backgroundColor: data.color }}
    />
  </div>
) : null);


SelectOption.propTypes = {
  isDisabled: PropTypes.bool,
  innerProps: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

SelectOption.defaultProps = {
  isDisabled: false,
};

export default class ColorSelect extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      color: PropTypes.string,
    })),
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    options: null,
    placeholder: 'Select...',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ value: selectedOption });
  };

  render() {
    const { options, placeholder } = this.props;
    const { value } = this.state;

    return (
      <Select
        value={value}
        onChange={this.handleChange}
        options={options}
        clearable={false}
        className="react-select"
        classNamePrefix="react-select"
        placeholder={placeholder}
        components={{ Option: SelectOption }}
      />
    );
  }
}
