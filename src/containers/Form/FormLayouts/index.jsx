import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import HorizontalForm from './components/HorizontalForm';
import HorizontalFormWithIcons from './components/HorizontalFormWithIcons';
import VerticalForm from './components/VerticalForm';
import VerticalFormWithIcons from './components/VerticalFormWithIcons';
import VerticalFormHalf from './components/VerticalFormHalf';
import showResults from '../Show';

const FormLayouts = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.form_layouts.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <HorizontalForm onSubmit={showResults} />
      <HorizontalFormWithIcons onSubmit={showResults} />
      <VerticalForm onSubmit={showResults} />
      <VerticalFormWithIcons onSubmit={showResults} />
      <VerticalFormHalf onSubmit={showResults} />
    </Row>
  </Container>
);

FormLayouts.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(FormLayouts);
