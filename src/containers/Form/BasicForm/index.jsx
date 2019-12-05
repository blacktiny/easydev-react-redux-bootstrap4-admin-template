import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import HorizontalForm from './components/HorizontalForm';
import VerticalForm from './components/VerticalForm';
import showResults from '../Show';

const BasicForm = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.basic_form.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <HorizontalForm onSubmit={showResults} />
    </Row>
    <Row>
      <VerticalForm onSubmit={showResults} />
    </Row>
  </Container>
);

BasicForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BasicForm);
