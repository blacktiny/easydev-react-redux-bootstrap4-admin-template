import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import renderDropZoneField from '../../../../shared/components/form/DropZone';

const FileUploadCustomHeight = ({ handleSubmit, reset, t }) => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('forms.file_upload.file_upload_custom_height')}</h5>
          <h5 className="subhead">For files upload, use property
            <span className="red-text"> customHeight</span>
          </h5>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            name="files"
            component={renderDropZoneField}
            customHeight
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

FileUploadCustomHeight.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'file_upload_custom_height', // a unique identifier for this form
})(withTranslation('common')(FileUploadCustomHeight));
