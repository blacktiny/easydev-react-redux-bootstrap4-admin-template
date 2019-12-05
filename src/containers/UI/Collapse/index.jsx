import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import MinimalCollapse from './components/MinimalCollapse';
import BoxedCollapse from './components/BoxedCollapse';
import BoxedCollapseFullWidth from './components/BoxedCollapseFullWidth';


const Collapse = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.collapse.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <MinimalCollapse />
      <BoxedCollapse />
      <BoxedCollapseFullWidth />
    </Row>
  </Container>
);

Collapse.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Collapse);
