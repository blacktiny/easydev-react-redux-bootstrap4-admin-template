import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderSelectField from '../../../../shared/components/form/Select';

const WizardFormTwo = ({ handleSubmit, previousPage }) => (
  <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">What’s your address</h3>
    <div className="form__form-group">
      <span className="form__form-group-label">Country</span>
      <div className="form__form-group-field">
        <Field
          name="country"
          component={renderSelectField}
          type="text"
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
          placeholder="Select country"
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
          placeholder="City name"
        />
      </div>
    </div>
    <div className="form__form-group form__form-group--address">
      <span className="form__form-group-label">Address</span>
      <div className="form__form-group-field">
        <Field
          name="street_name"
          component="input"
          type="text"
          placeholder="Street name"
        />
        <Field
          name="building"
          component="input"
          type="text"
          placeholder="Building"
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
        />
      </div>
    </div>
    <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
      <Button color="primary" type="submit" className="next">Next</Button>
    </ButtonToolbar>
  </form>
);

WizardFormTwo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormTwo);
