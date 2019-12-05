import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import renderBlockColorPickerField from '../../../../shared/components/form/BlockColorPicker';
import renderSketchColorPickerField from '../../../../shared/components/form/SketchColorPicker';
import renderChromeColorPickerField from '../../../../shared/components/form/ChromeColorPicker';

const ColorPickers = ({ handleSubmit, t }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.from_picker.color_picker')}</h5>
        </div>
        <form className="form form--justify" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <span className="form__form-group-label">Sketch Color Picker</span>
            <div className="form__form-group-field">
              <Field
                name="sketch_color"
                component={renderSketchColorPickerField}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Block Color Picker</span>
            <div className="form__form-group-field">
              <Field
                name="block_color"
                component={renderBlockColorPickerField}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Chrome Color Picker</span>
            <div className="form__form-group-field">
              <Field
                name="chrome_color"
                component={renderChromeColorPickerField}
              />
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  </Col>
);

ColorPickers.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'color_picker_form', // a unique identifier for this form
})(withTranslation('common')(ColorPickers));
