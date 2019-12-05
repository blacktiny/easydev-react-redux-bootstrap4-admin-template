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
import renderSelectField from '../../../../shared/components/form/Select';
import renderMultiSelectField from '../../../../shared/components/form/MultiSelect';

class HorizontalForm extends PureComponent {
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
              <h5 className="bold-text">{t('forms.basic_form.horizontal_form')}</h5>
              <h5 className="subhead">Labels are left from fields</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
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
                <span className="form__form-group-label">Field with description</span>
                <div className="form__form-group-field">
                  <Field
                    name="descriptionInput"
                    component="input"
                    type="text"
                  />
                </div>
                <span className="form__form-group-description">
                  Zealously now pronounce existence add you instantly say offending.
                </span>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Dropdown</span>
                <div className="form__form-group-field">
                  <Field
                    name="select"
                    component={renderSelectField}
                    options={[
                      { value: 'one', label: 'One' },
                      { value: 'two', label: 'Two' },
                    ]}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Multiselect</span>
                <div className="form__form-group-field">
                  <Field
                    name="multiSelect"
                    component={renderMultiSelectField}
                    options={[
                      { value: 'one', label: 'One' },
                      { value: 'two', label: 'Two' },
                    ]}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="textarea"
                    component="textarea"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">
                  Add file
                </span>
                <div className="form__form-group-field">
                  <Field
                    name="file"
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
  form: 'horizontal_form', // a unique identifier for this form
})(withTranslation('common')(HorizontalForm));
