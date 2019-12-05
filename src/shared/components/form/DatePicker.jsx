import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

class DatePickerField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      startDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const { onChange } = this.props;
    this.setState({
      startDate: date,
    });
    onChange(date);
  }

  render() {
    const { startDate } = this.state;

    return (
      <div className="date-picker">
        <DatePicker
          className="form__form-group-datepicker"
          selected={startDate}
          onChange={this.handleChange}
          dateFormat="yyyy/MM/dd"
          dropDownMode="select"
        />
      </div>
    );
  }
}

const renderDatePickerField = (props) => {
  const { input } = props;
  return <DatePickerField {...input} />;
};

renderDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
};

export default renderDatePickerField;
