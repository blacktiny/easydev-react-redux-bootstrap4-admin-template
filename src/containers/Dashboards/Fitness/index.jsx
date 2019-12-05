import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ActivityChart from './components/ActivityChart';
import ActivityRating from './components/ActivityRating';
import FatBurning from './components/FatBurning';
import HeartRate from './components/HeartRate';
import CaloriesBurn from './components/CaloriesBurn';
import Steps from './components/Steps';
import Distance from './components/Distance';
import TodayRunningMap from './components/TodayRunningMap';
import MyCompetitors from './components/MyCompetitors';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const FitnessDashboard = ({ t, rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('dashboard_fitness.page_title')}</h3>
      </Col>
    </Row>
    <Row>
      <HeartRate />
      <CaloriesBurn />
      <Steps />
      <Distance />
    </Row>
    <Row>
      <ActivityChart dir={rtl.direction} />
      <TodayRunningMap />
      <MyCompetitors />
      <FatBurning dir={rtl.direction} />
      <ActivityRating dir={rtl.direction} />
    </Row>
  </Container>
);

FitnessDashboard.propTypes = {
  t: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
};

export default compose(withTranslation('common'), connect(state => ({
  rtl: state.rtl,
})))(FitnessDashboard);
