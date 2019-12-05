import React, { PureComponent } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import renderCheckBoxField from '../form/CheckBox';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    errorMsg: PropTypes.string,
    fieldUser: PropTypes.string,
    typeFieldUser: PropTypes.string,
    form: PropTypes.string.isRequired,
  };

  static defaultProps = {
    errorMessage: '',
    errorMsg: '',
    fieldUser: 'Username',
    typeFieldUser: 'text',
  }

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    const {
      handleSubmit, errorMessage, errorMsg, fieldUser, typeFieldUser, form,
    } = this.props;
    const { showPassword } = this.state;
    return (
      <Form className="form login-form" onSubmit={handleSubmit}>
        <Alert
          color="danger"
          isOpen={!!errorMessage || !!errorMsg}
        >
          {errorMessage}
          {errorMsg}
        </Alert>
        <div className="form__form-group">
          <span className="form__form-group-label">{fieldUser}</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="username"
              component="input"
              type={typeFieldUser}
              placeholder={fieldUser}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <button
              type="button"
              className={`form__form-group-button${showPassword ? ' active' : ''}`}
              onClick={e => this.showPassword(e)}
            ><EyeIcon />
            </button>
            <div className="account__forgot-password">
              <a href="/">Forgot a password?</a>
            </div>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group form__form-group-field">
            <Field
              name={`remember_me-${form}`}
              component={renderCheckBoxField}
              label="Remember me"
            />
          </div>
        </div>
        <div className="account__btns">
          <Button className="account__btn" submit="true" color="primary">Sign In</Button>
          <Link className="btn btn-outline-primary account__btn" to="/register">Create
            Account
          </Link>
        </div>
      </Form>
    );
  }
}

export default connect(state => ({
  errorMsg: state.user.error,
}))(reduxForm()(LogInForm));
