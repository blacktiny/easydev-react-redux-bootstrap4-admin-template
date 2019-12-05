import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';

const ButtonTypeControls = ({ handleSubmit, t }) => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.check_form_controls.button_type_controls')}</h5>
          <h5 className="subhead">Checkboxes and radio buttons. Use class
            <span className="red-text"> button</span>
          </h5>
        </div>
        <form className="form form--preview" onSubmit={handleSubmit}>
          <div>
            <p>Select color</p>
            <div className="form__select-color">
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="4ce1b6_button"
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
                    name="70bbfd_button"
                    component={renderCheckBoxField}
                    color="#70bbfd"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="fa4a86_button"
                    component={renderCheckBoxField}
                    color="#fa4a86"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="f6da6e_button"
                    component={renderCheckBoxField}
                    color="#f6da6e"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="7ed321_button"
                    component={renderCheckBoxField}
                    color="#7ed321"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="b635ba_button"
                    component={renderCheckBoxField}
                    color="#b635ba"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="ff4861_button"
                    component={renderCheckBoxField}
                    color="#ff4861"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="38c3d7_button"
                    component={renderCheckBoxField}
                    color="#38c3d7"
                    className="colored"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <Field
                    name="f98330_button"
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
                  name="checkbox_one_button"
                  component={renderCheckBoxField}
                  label="Checkbox 1"
                  defaultChecked
                  className="button"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="checkbox_two_button"
                  component={renderCheckBoxField}
                  label="Checkbox 2"
                  className="button"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="checkbox_disable_button"
                  component={renderCheckBoxField}
                  label="Checkbox Disabled"
                  disabled
                  className="button"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="checkbox_disable_check_button"
                  component={renderCheckBoxField}
                  label="Disabled & checked"
                  defaultChecked
                  disabled
                  className="button"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio_button"
                  component={renderRadioButtonField}
                  label="Radio button 1"
                  radioValue="1"
                  defaultChecked
                  className="button"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio_button"
                  component={renderRadioButtonField}
                  label="Radio button 2"
                  radioValue="2"
                  className="button"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio_disabled_button"
                  component={renderRadioButtonField}
                  label="Radio button disabled"
                  radioValue="1"
                  disabled
                  className="button"
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="radio_disabled_button"
                  component={renderRadioButtonField}
                  label="Disabled & checked"
                  radioValue="2"
                  defaultChecked
                  disabled
                  className="button"
                />
              </div>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  </Col>
);

ButtonTypeControls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'button_type_controls', // a unique identifier for this form
})(withTranslation('common')(ButtonTypeControls));
