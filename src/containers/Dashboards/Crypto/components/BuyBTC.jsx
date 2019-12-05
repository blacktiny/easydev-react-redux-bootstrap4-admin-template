import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const BuyBTC = ({ handleSubmit }) => (
  <div className="dashboard__place-order-form">
    <h5 className="bold-text">Buy BTC</h5>
    <h5 className="dashboard__place-order-form-subhead subhead">USD Balance: $12 232,34</h5>
    <form className="form form--horizontal" onSubmit={handleSubmit}>
      <div className="form__form-group">
        <span className="form__form-group-label">Price</span>
        <div className="form__form-group-field">
          <Field
            name="price"
            component="input"
            type="text"
            placeholder="$ 1322323,3"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Amount</span>
        <div className="form__form-group-field">
          <Field
            name="amount"
            component="input"
            type="text"
            placeholder="0,000334 BTC"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Total</span>
        <div className="form__form-group-field">
          <Field
            name="total"
            component="input"
            type="text"
            placeholder="$ 112,454"
          />
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar">
        <Button color="primary" type="submit">Buy BTC</Button>
      </ButtonToolbar>
    </form>
  </div>
);

BuyBTC.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'buy_btc_form', // a unique identifier for this form
})(BuyBTC);
