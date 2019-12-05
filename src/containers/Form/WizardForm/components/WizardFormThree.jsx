import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderToggleButtonField from '../../../../shared/components/form/ToggleButton';
import renderSelectField from '../../../../shared/components/form/Select';

const WizardFormOne = ({ handleSubmit, previousPage }) => (
  <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">Set the preferences</h3>
    <div className="form__form-group">
      <span className="form__form-group-label">Change Plan</span>
      <div className="form__form-group-field">
        <Field
          name="plan"
          component={renderSelectField}
          type="text"
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
          placeholder="Choose plan"
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">E-Mail Notifications</span>
      <div className="form__form-group-field">
        <Field
          name="email_notifications"
          component={renderToggleButtonField}
          defaultChecked
        />
      </div>
      <p className="wizard__description">Agreement offending commanded my an. Change wholly say why eldest
            period.
      </p>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Phone Notifications</span>
      <div className="form__form-group-field">
        <Field
          name="phone_notifications"
          component={renderToggleButtonField}
        />
      </div>
      <p className="wizard__description">Are projection put celebrated particular unreserved joy unsatiable its. In
            then dare good am rose bred or.
      </p>
    </div>
    <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
      <Button color="primary" type="submit">Submit</Button>
    </ButtonToolbar>
  </form>
);

WizardFormOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
