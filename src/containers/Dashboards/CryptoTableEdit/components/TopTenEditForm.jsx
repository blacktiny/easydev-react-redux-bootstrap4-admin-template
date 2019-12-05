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

const percentMask = createNumberMask({
  prefix: '',
  suffix: '%',
  allowDecimal: true,
  decimalSymbol: ',',
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

class TopTenEditForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { handleSubmit, initialValues } = this.props;

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Edit {initialValues.name}</h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Market Cap</span>
                <div className="form__form-group-field">
                  <Field
                    name="market_cap"
                    component={renderMaskField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Price</span>
                <div className="form__form-group-field">
                  <Field
                    name="price"
                    component={renderMaskField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Volume</span>
                <div className="form__form-group-field">
                  <Field
                    name="volume"
                    component={renderMaskField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Supply</span>
                <div className="form__form-group-field">
                  <Field
                    name="supply"
                    component={renderMaskField}
                    type="text"
                    mask={moneyMask}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Change</span>
                <div className="form__form-group-field">
                  <Field
                    name="change"
                    component={renderMaskField}
                    type="text"
                    mask={percentMask}
                  />
                </div>
              </div>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Link className="btn btn-secondary" to="/dashboard_crypto">Cancel</Link>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const topTenEditForm = reduxForm({
  enableReinitialize: true,
  form: 'top_ten_edit_form',
})(TopTenEditForm);

const mapStateToProps = state => ({
  initialValues: state.cryptoTable.data,
});

export default connect(mapStateToProps)(topTenEditForm);
