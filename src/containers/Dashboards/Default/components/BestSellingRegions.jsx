import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  GoogleMap, Marker, withGoogleMap, withScriptjs,
} from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import Panel from '../../../../shared/components/Panel';
import silverMapStyle from './silverMapStyle.json';

import data from './data.json';

const Map = compose(
  withProps({
    // create your api key
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=&v=3.'
    + 'exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="map" style={{ height: '360px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
    defaultOptions={{ styles: silverMapStyle }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
      styles={[
        {
          url: `${process.env.PUBLIC_URL}/img/map_markers/m1.png`,
          height: 53,
          width: 53,
        },
        {
          url: `${process.env.PUBLIC_URL}/img/map_markers/m1.png`,
          height: 56,
          width: 56,
        },
        {
          url: `${process.env.PUBLIC_URL}/img/map_markers/m1.png`,
          height: 66,
          width: 66,
        },
        {
          url: `${process.env.PUBLIC_URL}/img/map_markers/m1.png`,
          height: 78,
          width: 78,
        },
        {
          url: `${process.env.PUBLIC_URL}/img/map_markers/m1.png`,
          height: 90,
          width: 90,
        },
      ]}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

const BestSellingRegions = ({ t }) => (
  <Panel xs={12} md={12} lg={12} xl={8} title={t('dashboard_default.best_selling')}>
    <div dir="ltr">
      <Map markers={data.photos} />
    </div>
  </Panel>
);

BestSellingRegions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BestSellingRegions);
