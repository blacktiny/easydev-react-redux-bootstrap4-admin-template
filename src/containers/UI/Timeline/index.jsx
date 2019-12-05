import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import TimelineHistory from './components/TimelineHistory';

const Timeline = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.timeline.title')}</h3>
        <h3 className="page-subhead subhead">This interface let you to see your activity history</h3>
      </Col>
    </Row>
    <Row>
      <TimelineHistory />
    </Row>
  </Container>
);

Timeline.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Timeline);
