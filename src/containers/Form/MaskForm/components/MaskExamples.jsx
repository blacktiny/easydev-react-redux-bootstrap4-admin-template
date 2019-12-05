import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import MaskedInput from 'react-text-mask';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const renderField = ({
  input, placeholder, type, mask, className, guide = true, pipe, keepCharPositions = false,
}) => (
  <MaskedInput
    {...input}
    placeholder={placeholder}
    type={type}
    mask={mask}
    className={className}
    guide={guide}
    pipe={pipe}
    keepCharPositions={keepCharPositions}
  />
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
  guide: PropTypes.bool.isRequired,
  keepCharPositions: PropTypes.bool.isRequired,
  pipe: PropTypes.func.isRequired,
};

renderField.defaultProps = {
  placeholder: '',
  type: 'text',
};

const maskDate = (dir, sep) => {
  if (dir === 'rtl') {
    return [/\d/, /\d/, /\d/, /\d/, sep, /[0-1]/, /\d/, sep, /[0-3]/, /\d/];
  }
  return [/[0-3]/, /\d/, sep, /[0-1]/, /\d/, sep, /\d/, /\d/, /\d/, /\d/];
};

const autoCorrectedDatePipe = (dir, sep) => {
  const format = dir === 'rtl' ? `yyyy${sep}mm${sep}dd` : `dd${sep}mm${sep}yyyy`;
  return createAutoCorrectedDatePipe(format);
};

const numberMask = createNumberMask({
  prefix: '$ ',
  allowDecimal: true,
  allowLeadingZeroes: true,
});

const ipMask = () => [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];

const all = /[A-Za-z0-9]/;

const MaskExamples = ({
  handleSubmit, reset, t, dir,
}) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.mask_form.mask_examples')}</h5>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <span className="form__form-group-label">Phone <span>(xxx)-xxx-xxxx</span></span>
            <div className="form__form-group-field">
              <Field
                name="phone"
                component={renderField}
                type="text"
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className="phone-input"
                guide={false}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Phone with code <span>+23 xxx xx xx</span></span>
            <div className="form__form-group-field">
              <Field
                name="phone_code"
                component={renderField}
                type="text"
                mask={['+', '2', '3', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                className="phone-input"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Date
              <span>{`${dir === 'ltr' ? ' dd/mm/yyyy' : ' yyyy/mm/dd'}`}</span>
            </span>
            <div className="form__form-group-field">
              <Field
                name="date"
                component={renderField}
                type="text"
                mask={maskDate(dir, '/')}
                pipe={autoCorrectedDatePipe(dir, '/')}
                keepCharPositions
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Date
              <span>{`${dir === 'ltr' ? ' dd-mm-yyyy' : ' yyyy-mm-dd'}`}</span>
            </span>
            <div className="form__form-group-field">
              <Field
                name="date_another"
                component={renderField}
                type="text"
                mask={maskDate(dir, '-')}
                pipe={autoCorrectedDatePipe(dir, '-')}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Currency <span>$xxx,xxx,xxx.xx</span></span>
            <div className="form__form-group-field">
              <Field
                name="currency"
                component={renderField}
                type="text"
                mask={numberMask}
                guide={false}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Licence key <span>xxxx-xxxx-xxxx-xxxx</span></span>
            <div className="form__form-group-field">
              <Field
                name="licence"
                component={renderField}
                type="text"
                mask={[all, all, all, all, '-', all, all, all, all, '-', all, all, all, all, '-', all, all, all, all]}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">IP Address <span>xxx.xxx.xxx.xxx</span></span>
            <div className="form__form-group-field">
              <Field
                name="ip"
                component={renderField}
                type="text"
                // mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]}
                mask={ipMask}
                guide={false}
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

MaskExamples.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
};

export default reduxForm({
  form: 'mask_examples', // a unique identifier for this form
})(withTranslation('common')(MaskExamples));
