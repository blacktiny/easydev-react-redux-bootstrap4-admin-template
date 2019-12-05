import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';
import renderSelectField from '../../../../shared/components/form/Select';

const ProductEditForm = ({ handleSubmit, reset }) => (
  <form className="form product-edit" onSubmit={handleSubmit}>
    <div className="form__half">
      <div className="form__form-group">
        <span className="form__form-group-label">Product Name</span>
        <div className="form__form-group-field">
          <Field
            name="name"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__form-group-id-category">
        <div className="form__form-group form__form-group-id">
          <span className="form__form-group-label">ID</span>
          <div className="form__form-group-field">
            <Field
              name="id"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Category</span>
          <div className="form__form-group-field">
            <Field
              name="category"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Short description <span dir="ltr">(300 characters max)</span></span>
        <div className="form__form-group-field">
          <Field
            name="short_description"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Full description</span>
        <div className="form__form-group-field">
          <Field
            name="full_description"
            component="textarea"
            type="text"
          />
        </div>
      </div>

      <div className="card__title">
        <h5 className="bold-text">Pricing</h5>
      </div>
      <div className="form__form-group-price-discount">
        <div className="form__form-group form__form-group-price">
          <span className="form__form-group-label">Price</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <CurrencyUsdIcon />
            </div>
            <Field
              name="price"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Discount</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <TagIcon />
            </div>
            <Field
              name="discount"
              component="input"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="card__title">
        <h5 className="bold-text">General information</h5>
      </div>
      <div className="form form--horizontal">
        <div className="form__form-group">
          <span className="form__form-group-label">Brand Name</span>
          <div className="form__form-group-field">
            <Field
              name="brand"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Category</span>
          <div className="form__form-group-field">
            <Field
              name="general_category"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Delivery Condition</span>
          <div className="form__form-group-field">
            <Field
              name="delivery"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Weight</span>
          <div className="form__form-group-field">
            <Field
              name="weight"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Size</span>
          <div className="form__form-group-field">
            <Field
              name="size"
              component="input"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="form__half">
      <div className="form__form-group">
        <span className="form__form-group-label">Upload photo</span>
        <div className="form__form-group-field">
          <Field
            name="files"
            component={renderDropZoneMultipleField}
          />
        </div>
      </div>
    </div>
    <ButtonToolbar className="form__button-toolbar">
      <Button color="primary" type="submit">Save</Button>
      <Button type="button" onClick={reset}>Cancel</Button>
    </ButtonToolbar>
  </form>
);

ProductEditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'product_edit_form', // a unique identifier for this form
})(ProductEditForm);
