import React, { PureComponent } from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const moneyMask = createNumberMask({
  prefix: '$ ',
  suffix: '',
  thousandsSeparatorSymbol: ' ',
});

const renderMaskField = ({
  input, type, placeholder, mask,
}) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask} />
);

renderMaskField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.func.isRequired,
};

renderMaskField.defaultProps = {
  placeholder: '',
  type: 'text',
};

class NewOrderEditForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { handleSubmit, initialValues } = this.props;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Edit {initialValues.title}</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Title</span>
                <div className="form__form-group-field">
                  <Field
                    name="title"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Quantity</span>
                <div className="form__form-group-field">
                  <Field
                    name="quantity"
                    component="input"
                    type="number"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Sold</span>
                <div className="form__form-group-field">
                  <Field
                    name="sold"
                    component="input"
                    type="number"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Total</span>
                <div className="form__form-group-field">
                  <Field
                    name="total"
                    component={renderMaskField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Image URL</span>
                <div className="form__form-group-field">
                  <Field
                    name="img"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Link className="btn btn-secondary" to="/dashboard_e_commerce">Cancel</Link>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const newOrderEditForm = reduxForm({
  enableReinitialize: true,
  form: 'new_edit_edit_form',
})(NewOrderEditForm);

const mapStateToProps = state => ({
  initialValues: state.newOrder.data,
});

export default connect(mapStateToProps)(newOrderEditForm);
