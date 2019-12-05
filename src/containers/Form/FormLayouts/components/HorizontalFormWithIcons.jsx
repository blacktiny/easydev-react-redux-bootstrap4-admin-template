import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import EyeIcon from 'mdi-react/EyeIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import MailRuIcon from 'mdi-react/MailRuIcon';
import WebIcon from 'mdi-react/WebIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';

class HorizontalFormWithIcons extends PureComponent {
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
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('forms.form_layouts.horizontal_form_with_icons')}</h5>
              <h5 className="subhead">Labels are left from fields and icons</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Username</span>
                <div className="form__form-group-field">
                  <div className="form__form-group-icon">
                    <AccountOutlineIcon />
                  </div>
                  <Field
                    name="username"
                    component="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">E-mail</span>
                <div className="form__form-group-field">
                  <div className="form__form-group-icon">
                    <MailRuIcon />
                  </div>
                  <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Url</span>
                <div className="form__form-group-field">
                  <div className="form__form-group-icon">
                    <WebIcon />
                  </div>
                  <Field
                    name="url"
                    component="input"
                    type="text"
                    placeholder="https://themeforest.net"
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
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="remember_me_horizontal_icons"
                    component={renderCheckBoxField}
                    label="Remember me"
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
  form: 'horizontal_form_layout_with_icons', // a unique identifier for this form
})(withTranslation('common')(HorizontalFormWithIcons));
