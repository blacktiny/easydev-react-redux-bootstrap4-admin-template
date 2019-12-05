import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AnimatedLineForm from './components/AnimatedLineForm';
import showResults from '../Show';

const MaterialForm = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.material_from.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <AnimatedLineForm onSubmit={showResults} />
    </Row>
  </Container>
);

MaterialForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(MaterialForm);
