import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Map from './components/Map';

const VectorMap = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('maps.vector_map.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <Map />
    </Row>
  </Container>
);

VectorMap.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(VectorMap);
