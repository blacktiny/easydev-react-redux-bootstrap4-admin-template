/* eslint-disable react/no-children-prop */
import React, { PureComponent } from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const renderTextField = ({
  input, label, meta: { touched, error }, children,
}) => (
  <TextField
    className="material-form__field"
    label={label}
    error={touched && error}
    children={children}
    value={input.value}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  children: PropTypes.arrayOf(PropTypes.element),
};

renderTextField.defaultProps = {
  meta: null,
  label: '',
  children: [],
};

class ProfileSettings extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <form className="material-form" onSubmit={handleSubmit}>
        <div>
          <span className="material-form__label">Full Name</span>
          <Field
            name="username"
            component={renderTextField}
            placeholder="Name"
          />
        </div>
        <div>
          <span className="material-form__label">Email</span>
          <Field
            name="email"
            component={renderTextField}
            placeholder="example@mail.com"
            type="email"
          />
        </div>
        <div>
          <span className="material-form__label">URL</span>
          <Field
            name="url"
            component={renderTextField}
            placeholder="https://themeforest.net"
            type="url"
          />
        </div>
        <div>
          <span className="material-form__label">Password</span>
          <Field
            name="password"
            component={renderTextField}
            type="password"
          />
        </div>
        <div>
          <span className="material-form__label">Text Area</span>
          <Field
            name="textarea"
            component={renderTextField}
            placeholder="Type message here"
            multiline
            rowsMax="4"
          />
        </div>
        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Update profile</Button>
          <Button type="button" onClick={reset}>
            Cancel
          </Button>
        </ButtonToolbar>
      </form>
    );
  }
}

export default reduxForm({
  form: 'profile_settings_form', // a unique identifier for this form
})(ProfileSettings);
