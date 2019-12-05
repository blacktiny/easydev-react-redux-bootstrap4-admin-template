import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { compose, withProps } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Map = compose(
  withProps({
    // generate your API key
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=&v=3.'
    + 'exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="map" style={{ height: '360px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(() => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 56.009483, lng: 92.8121694 }}
  />
));

const BasicMap = ({ t }) => (
  <Col xs={12} md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('maps.google_map.basic_map')}</h5>
        </div>
        <Map />
      </CardBody>
    </Card>
  </Col>
);

BasicMap.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BasicMap);
