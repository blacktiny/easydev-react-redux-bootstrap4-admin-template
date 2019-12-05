import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import DefaultControls from './components/DefaultControls';
import ColoredControls from './components/ColoredControls';
import ColoredControlsOnClick from './components/ColoredControlsOnClick';
import ButtonTypeControls from './components/ButtonTypeControls';
import showResults from '../Show';

const CheckFormControls = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.check_form_controls.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <DefaultControls onSubmit={showResults} />
      <ColoredControls onSubmit={showResults} />
      <ColoredControlsOnClick onSubmit={showResults} />
      <ButtonTypeControls onSubmit={showResults} />
    </Row>
  </Container>
);

CheckFormControls.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(CheckFormControls);
