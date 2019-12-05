import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import showResults from '../Show';
import Wizard from './components/WizardForm';

const WizardForm = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.wizard_from.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Wizard onSubmit={showResults} />
  </Container>
);

WizardForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(WizardForm);
