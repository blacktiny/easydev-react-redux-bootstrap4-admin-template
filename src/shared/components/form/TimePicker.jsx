import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TimePicker from 'rc-time-picker';
import AvTimerIcon from 'mdi-react/AvTimerIcon';
import classNames from 'classnames';

class TimePickerField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    timeMode: PropTypes.bool.isRequired,
  };

  state = {
    open: false,
  };

  setOpen = ({ open }) => {
    this.setState({ open });
  };

  toggleOpen = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { name, onChange, timeMode } = this.props;
    const { open } = this.state;
    const btnClass = classNames({
      'form__form-group-button': true,
      active: open,
    });

    return (
      <div className="form__form-group-field">
        <TimePicker
          open={open}
          onOpen={this.setOpen}
          onClose={this.setOpen}
          name={name}
          onChange={onChange}
          showSecond={false}
          use12Hours={timeMode}
        />
        <button
          className={btnClass}
          type="button"
          onClick={this.toggleOpen}
        >
          <AvTimerIcon />
        </button>
      </div>
    );
  }
}

const renderTimePickerField = (props) => {
  const { input, timeMode } = props;
  return (
    <TimePickerField
      {...input}
      timeMode={timeMode}
    />
  );
};

renderTimePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  timeMode: PropTypes.bool,
};

renderTimePickerField.defaultProps = {
  timeMode: false,
};

export default renderTimePickerField;
