import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import BasicMap from './components/BasicMap';
import PinWithInfoWindow from './components/PinWithInfoWindow';
import MonochromeMap from './components/MonochromeMap';


const GoogleMap = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('maps.google_map.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <BasicMap />
      <PinWithInfoWindow />
      <MonochromeMap />
    </Row>
  </Container>
);

GoogleMap.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(GoogleMap);
