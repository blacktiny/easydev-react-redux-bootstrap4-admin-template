import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import { withTranslation } from 'react-i18next';
import renderSelectField from '../../../../shared/components/form/Select';
import validate from './validate';

const renderField = ({
  input, placeholder, type, meta: { touched, error },
}) => (
  <div className="form__form-group-input-wrap">
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && <span className="form__form-group-error">{error}</span>}
  </div>
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderField.defaultProps = {
  placeholder: '',
  meta: null,
  type: 'text',
};

class VerticalForm extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const {
      handleSubmit, pristine, reset, submitting, t,
    } = this.props;
    const { showPassword } = this.state;

    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('forms.from_validation.vertical_form_validate')}</h5>
              <h5 className="subhead">Errors are under fields</h5>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Username</span>
                <div className="form__form-group-field">
                  <Field
                    name="username"
                    component={renderField}
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">E-mail</span>
                <div className="form__form-group-field">
                  <Field
                    name="email"
                    component={renderField}
                    type="email"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Url</span>
                <div className="form__form-group-field">
                  <Field
                    name="url"
                    component={renderField}
                    type="url"
                    placeholder="https://themeforest.net"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Password</span>
                <div className="form__form-group-field">
                  <Field
                    name="password"
                    component={renderField}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className={`form__form-group-button${showPassword ? ' active' : ''}`}
                    tabIndex="-1"
                    onClick={e => this.showPassword(e)}
                  ><EyeIcon />
                  </button>
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Select Option</span>
                <div className="form__form-group-field">
                  <Field
                    name="select"
                    component={renderSelectField}
                    type="text"
                    options={[
                      { value: 'one', label: 'One' },
                      { value: 'two', label: 'Two' },
                    ]}
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Validate</Button>
                <Button type="button" onClick={reset} disabled={pristine || submitting}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default reduxForm({
  form: 'vertical_form_validation', // a unique identifier for this form
  validate,
})(withTranslation('common')(VerticalForm));
