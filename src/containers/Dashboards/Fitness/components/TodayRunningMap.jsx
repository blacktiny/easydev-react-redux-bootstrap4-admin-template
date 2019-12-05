import React from 'react';
import { compose, withProps } from 'recompose';
import {
  GoogleMap, KmlLayer, withGoogleMap, withScriptjs,
} from 'react-google-maps';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';
import silverMapStyle from './silverMapStyle.json';

const MapWithAKmlLayer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=&v=3.'
    + 'exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="map" style={{ height: '380px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(() => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 41.878197, lng: -87.651229 }}
    defaultOptions={{ styles: silverMapStyle }}
  >
    <KmlLayer
      url="http://previews.aspirity.com/test/cta3.kml"
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
));

const TodayRunningMap = ({ t }) => (
  <Panel xs={12} lg={12} xl={9} md={12} title={t('dashboard_fitness.today_running_map')}>
    <MapWithAKmlLayer />
  </Panel>
);

TodayRunningMap.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(TodayRunningMap);
