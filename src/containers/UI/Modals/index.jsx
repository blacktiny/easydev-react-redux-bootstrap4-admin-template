import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import DefaultModals from './components/DefaultModals';
import ColoredModals from './components/ColoredModals';
import HeaderModals from './components/HeaderModals';

const Modals = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.modals.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <DefaultModals />
      <ColoredModals />
      <HeaderModals />
    </Row>
  </Container>
);

Modals.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Modals);
