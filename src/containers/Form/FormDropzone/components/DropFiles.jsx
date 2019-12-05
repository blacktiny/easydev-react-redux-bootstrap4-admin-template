import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';

const DropFiles = ({ handleSubmit, reset, t }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.form_dropzone.drop_files_to_upload')}</h5>
          <h5 className="subhead">For multiply files upload</h5>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            name="files"
            component={renderDropZoneMultipleField}
          />
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

DropFiles.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'drop_files_form', // a unique identifier for this form
})(withTranslation('common')(DropFiles));
