import React from 'react';
import { Progress } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const GoalsCompletion = ({ t }) => (
  <Panel xs={12} md={12} lg={12} xl={4} title={t('dashboard_default.goals_completion')} subhead="What's your progress">
    <div className="progress-wrap progress-wrap--small">
      <p>Completed Purchase</p>
      <Progress value={46}>46%</Progress>
    </div>
    <div className="progress-wrap progress-wrap--small">
      <p>New clients</p>
      <Progress value={67}>67%</Progress>
    </div>
    <div className="progress-wrap progress-wrap--small">
      <p>New subscribers</p>
      <Progress value={87}>87%</Progress>
    </div>
    <div className="progress-wrap progress-wrap--small">
      <p>Site visits from ADS banners</p>
      <Progress value={24}>24%</Progress>
    </div>
    <div className="progress-wrap progress-wrap--small">
      <p>Total page views</p>
      <Progress value={56}>56%</Progress>
    </div>
    <div className="progress-wrap progress-wrap--small">
      <p>Positive feedback</p>
      <Progress value={46}>46%</Progress>
    </div>
  </Panel>
);

GoalsCompletion.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(GoalsCompletion);
