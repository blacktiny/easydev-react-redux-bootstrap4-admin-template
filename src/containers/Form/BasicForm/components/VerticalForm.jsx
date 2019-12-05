import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import renderFileInputField from '../../../../shared/components/form/FileInput';

class VerticalForm extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
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
    const { handleSubmit, reset, t } = this.props;
    const { showPassword } = this.state;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('forms.basic_form.vertical_form')}</h5>
              <h5 className="subhead">Labels are above fields</h5>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Default Label</span>
                <div className="form__form-group-field">
                  <Field
                    name="defaultInput"
                    component="input"
                    type="text"
                    placeholder="Default Input"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Disabled Field</span>
                <div className="form__form-group-field">
                  <Field
                    name="disableInput"
                    component="input"
                    type="text"
                    placeholder="Disabled Input"
                    disabled
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">E-mail</span>
                <div className="form__form-group-field">
                  <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Password</span>
                <div className="form__form-group-field">
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
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Icon Left</span>
                <div className="form__form-group-field">
                  <div className="form__form-group-icon">
                    <EmailIcon />
                  </div>
                  <Field
                    name="leftIcon"
                    component="input"
                    type="email"
                    placeholder="Icon Left Input"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Icon Right</span>
                <div className="form__form-group-field">
                  <Field
                    name="rightIcon"
                    component="input"
                    type="text"
                    placeholder="Icon Right Input"
                  />
                  <div className="form__form-group-icon">
                    <AccountSearchIcon />
                  </div>
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">
                  Add file
                </span>
                <div className="form__form-group-field">
                  <Field
                    name="fileVertical"
                    component={renderFileInputField}
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button type="button" onClick={reset}>
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
  form: 'vertical_form', // a unique identifier for this form
})(withTranslation('common')(VerticalForm));
