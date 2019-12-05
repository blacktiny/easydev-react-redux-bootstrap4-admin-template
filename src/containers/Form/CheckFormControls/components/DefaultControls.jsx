import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';

const DefaultControls = ({ handleSubmit, t }) => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.check_form_controls.default_controls')}</h5>
          <h5 className="subhead">Checkboxes and radio buttons</h5>
        </div>
        <form className="form form--preview" onSubmit={handleSubmit}>
          <div>
            <p>Select color</p>
            <div className="form__select-color">
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="4ce1b6"
                    component={renderCheckBoxField}
                    defaultChecked
                    color="#4ce1b6"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="70bbfd"
                    component={renderCheckBoxField}
                    color="#70bbfd"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="fa4a86"
                    component={renderCheckBoxField}
                    color="#fa4a86"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="f6da6e"
                    component={renderCheckBoxField}
                    color="#f6da6e"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="7ed321"
                    component={renderCheckBoxField}
                    color="#7ed321"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="b635ba"
                    component={renderCheckBoxField}
                    color="#b635ba"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="ff4861"
                    component={renderCheckBoxField}
                    color="#ff4861"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="38c3d7"
                    component={renderCheckBoxField}
                    color="#38c3d7"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="f98330"
                    component={renderCheckBoxField}
                    color="#f98330"
                    className="colored"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="checkbox_one"
                  component={renderCheckBoxField}
                  label="Checkbox 1"
                  defaultChecked
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="checkbox_two"
                  component={renderCheckBoxField}
                  label="Checkbox 2"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="checkbox_disable"
                  component={renderCheckBoxField}
                  label="Checkbox Disabled"
                  disabled
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="checkbox_disable_check"
                  component={renderCheckBoxField}
                  label="Disabled & checked"
                  defaultChecked
                  disabled
                />
              </div>
            </div>
          </div>
          <div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio"
                  component={renderRadioButtonField}
                  label="Radio button 1"
                  radioValue="1"
                  defaultChecked
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio"
                  component={renderRadioButtonField}
                  label="Radio button 2"
                  radioValue="2"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio_disabled"
                  component={renderRadioButtonField}
                  label="Radio button disabled"
                  radioValue="1"
                  disabled
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio_disabled"
                  component={renderRadioButtonField}
                  label="Radio button disabled & checked"
                  radioValue="2"
                  defaultChecked
                  disabled
                />
              </div>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  </Col>
);

DefaultControls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'defaults_controls', // a unique identifier for this form
})(withTranslation('common')(DefaultControls));
