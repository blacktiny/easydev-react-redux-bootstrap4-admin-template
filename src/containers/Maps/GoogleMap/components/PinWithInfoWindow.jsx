/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  GoogleMap, Marker, withGoogleMap, withScriptjs,
} from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import CloseIcon from 'mdi-react/CloseIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const MapWithAMarker = compose(
  withProps({
    // generate your API key
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=&v=3.'
    + 'exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="map" style={{ height: '360px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withStateHandlers(() => ({
    isOpen: true,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 56.009483, lng: 92.8121694 }}
  >
    {props.isMarkerShown
      && (
      <Marker position={{ lat: 56.009483, lng: 92.8121694 }} onClick={props.onToggleOpen}>
        {props.isOpen
        && (
        <InfoBox options={{ closeBoxURL: '', enableEventPropagation: true }}>
          <div className="map__marker-label">
            <div className="map__marker-label-content">
              <div className="map__maker-label-close" onClick={props.onToggleOpen}><CloseIcon /></div>
              DRAKARYS!!!
            </div>
          </div>
        </InfoBox>
        )}
      </Marker>
      )}
  </GoogleMap>
));

const BasicMap = ({ t }) => (
  <Col xs={12} md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('maps.google_map.pin_with_info_window')}</h5>
        </div>
        <MapWithAMarker isMarkerShown />
      </CardBody>
    </Card>
  </Col>
);

BasicMap.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BasicMap);
