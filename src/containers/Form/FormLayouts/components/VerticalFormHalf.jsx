import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
import renderSelectField from '../../../../shared/components/form/Select';

const VerticalFormHalf = ({ handleSubmit, reset, t }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.form_layouts.vertical_form')}</h5>
          <h5 className="subhead">Labels are above fields, use div with class super
            <span className="red-text"> form__half</span>
          </h5>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">First Name</span>
              <div className="form__form-group-field">
                <Field
                  name="first_name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Last Name</span>
              <div className="form__form-group-field">
                <Field
                  name="last_name"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Date of Birth</span>
              <div className="form__form-group-field">
                <Field
                  name="birth"
                  component="input"
                  type="text"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Gender</span>
              <div className="form__form-group-field">
                <Field
                  name="gender"
                  component={renderRadioButtonField}
                  label="Male"
                  radioValue="male"
                  defaultChecked
                />
                <Field
                  name="gender"
                  component={renderRadioButtonField}
                  label="Female"
                  radioValue="female"
                />
              </div>
            </div>
          </div>
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Select your country </span>
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
            <div className="form__form-group">
              <span className="form__form-group-label">City</span>
              <div className="form__form-group-field">
                <Field
                  name="city"
                  component="input"
                  type="text"
                  placeholder="Your city name"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">ZIP Code</span>
              <div className="form__form-group-field">
                <Field
                  name="zip"
                  component="input"
                  type="text"
                  placeholder="Enter your ZIP code"
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button type="button" onClick={reset}>
                    Cancel
              </Button>
              <Button color="primary" type="submit">Submit</Button>
            </ButtonToolbar>
          </div>
        </form>
      </CardBody>
    </Card>
  </Col>
);

VerticalFormHalf.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'vertical_form_layout_half', // a unique identifier for this form
})(withTranslation('common')(VerticalFormHalf));
