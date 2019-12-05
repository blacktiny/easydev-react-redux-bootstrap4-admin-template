import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AnimatedLineFormWithLabels from './components/AnimatedLineFormWithLabels';
import showResults from '../Show';


const FloatingLabelsForm = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.floating_labels_form.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <AnimatedLineFormWithLabels onSubmit={showResults} />
    </Row>
  </Container>
);

FloatingLabelsForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(FloatingLabelsForm);
