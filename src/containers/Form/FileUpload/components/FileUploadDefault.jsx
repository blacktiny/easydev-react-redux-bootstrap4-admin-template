import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import renderDropZoneField from '../../../../shared/components/form/DropZone';

const FileUploadDefault = ({ handleSubmit, reset, t }) => (
  <Col md={12} lg={6}>
    <Card className="card--not-full-height">
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.file_upload.file_upload_default')}</h5>
          <h5 className="subhead">For files upload</h5>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            name="files"
            component={renderDropZoneField}
          />
          <ButtonToolbar className="form__button-toolbar">
            <Button color="primary" type="submit">Submit</Button>
            <Button type="reset" onClick={reset}>
                  Cancel
            </Button>
          </ButtonToolbar>
        </form>
      </CardBody>
    </Card>
  </Col>
);

FileUploadDefault.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'file_upload_default', // a unique identifier for this form
})(withTranslation('common')(FileUploadDefault));
