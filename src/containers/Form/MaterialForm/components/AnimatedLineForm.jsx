/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const renderTextField = ({
  input, label, meta: { touched, error }, children, select,
}) => (
  <TextField
    className="material-form__field"
    label={label}
    error={touched && error}
    value={input.value}
    children={children}
    select={select}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

renderTextField.defaultProps = {
  label: '',
  meta: null,
  select: false,
  children: [],
};

const AnimatedLine = ({ handleSubmit, reset, t }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.material_from.animated_line')}</h5>
          <h5 className="subhead">Material design fields</h5>
        </div>
        <form className="material-form" onSubmit={handleSubmit}>
          <div>
            <span className="material-form__label">Username</span>
            <Field
              name="username"
              component={renderTextField}
              placeholder="Name"
            />
          </div>
          <div>
            <span className="material-form__label">Email</span>
            <Field
              name="email"
              component={renderTextField}
              placeholder="example@mail.com"
              type="email"
            />
          </div>
          <div>
            <span className="material-form__label">URL</span>
            <Field
              name="url"
              component={renderTextField}
              placeholder="https://themeforest.net"
              type="url"
            />
          </div>
          <div>
            <span className="material-form__label">Password</span>
            <Field
              name="password"
              component={renderTextField}
              type="password"
            />
          </div>
          <div>
            <span className="material-form__label">Select Option</span>
            <Field
              name="select"
              component={renderTextField}
              select
            >
              <MenuItem className="material-form__option" value="one">One</MenuItem>
              <MenuItem className="material-form__option" value="two">Two</MenuItem>
            </Field>
          </div>
          <div>
            <span className="material-form__label">Text Area</span>
            <Field
              name="textarea"
              component={renderTextField}
              placeholder="Type message here"
              multiline
              rowsMax="4"
            />
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

AnimatedLine.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'material_form', // a unique identifier for this form
})(withTranslation('common')(AnimatedLine));
