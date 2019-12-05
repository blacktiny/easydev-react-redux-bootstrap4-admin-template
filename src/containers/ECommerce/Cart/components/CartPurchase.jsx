import React from 'react';
import { ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';

const CartPurchase = ({ handleSubmit }) => (
  <form className="form cart__deliveries" onSubmit={handleSubmit}>
    <div className="form__form-group">
      <span className="form__form-group-label">Delivery method:</span>
      <div className="form__form-group-field cart__delivery-field">
        <div className="cart__delivery">
          <Field
            name="delivery"
            component={renderRadioButtonField}
            label="Russian Post"
            radioValue="russian_post"
            defaultChecked
          />
          <p className="cart__delivery-time">5-7 working days</p>
          <p className="cart__delivery-price">$20</p>
        </div>
        <div className="cart__delivery">
          <Field
            name="delivery"
            component={renderRadioButtonField}
            label="DHL Service"
            radioValue="dhl"
          />
          <p className="cart__delivery-time">1-3 working days</p>
          <p className="cart__delivery-price">$39</p>
        </div>
        <div className="cart__delivery">
          <Field
            name="delivery"
            component={renderRadioButtonField}
            label="Mail Priority"
            radioValue="mail_priority"
          />
          <p className="cart__delivery-time">Tomorrow</p>
          <p className="cart__delivery-price">$54</p>
        </div>
      </div>
    </div>
    <h4 className="cart__total">Total Price: $348.00</h4>
    <ButtonToolbar className="form__button-toolbar">
      <Link className="btn btn-primary" to="/e-commerce/payment">Purchase</Link>
    </ButtonToolbar>
  </form>
);

CartPurchase.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'cart_purchase_form', // a unique identifier for this form
})(CartPurchase);
