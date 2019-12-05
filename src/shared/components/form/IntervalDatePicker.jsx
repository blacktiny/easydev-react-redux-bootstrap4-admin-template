/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import MinusIcon from 'mdi-react/MinusIcon';
import PropTypes from 'prop-types';

class IntervalDatePickerField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeStart = startDate => this.handleChange({ startDate });

  handleChangeEnd = endDate => this.handleChange({ endDate });

  handleChange({ startDate, endDate }) {
    const { startDate: stateStartDate, endDate: stateEndDate } = this.state;

    const { onChange } = this.props;

    startDate = startDate || stateStartDate;
    endDate = endDate || stateEndDate;

    this.setState({ startDate, endDate });
    onChange({ start: startDate, end: endDate });
  }

  render() {
    const { startDate, endDate } = this.state;

    return (
      <div className="date-picker date-picker--interval">
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeStart}
          dateFormat="yyyy/MM/dd"
          placeholderText="From"
          dropDownMode="select"
        />
        <MinusIcon className="date-picker__svg" />
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeEnd}
          dateFormat="yyyy/MM/dd"
          placeholderText="To"
          dropDownMode="select"
        />
      </div>
    );
  }
}

const renderIntervalDatePickerField = (props) => {
  const { input } = props;
  return (
    <IntervalDatePickerField
      {...input}
    />
  );
};

renderIntervalDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default renderIntervalDatePickerField;
