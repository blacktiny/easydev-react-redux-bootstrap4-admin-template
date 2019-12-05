import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import showResults from '../Show';
import FileUploadDefault from './components/FileUploadDefault';
import FileUploadCustomHeight from './components/FileUploadCustomHeight';

const FileUpload = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.file_upload.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <FileUploadDefault onSubmit={showResults} />
      <FileUploadCustomHeight onSubmit={showResults} />
    </Row>
  </Container>
);

FileUpload.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(FileUpload);
