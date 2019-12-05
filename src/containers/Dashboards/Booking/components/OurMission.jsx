/* eslint-disable react/no-array-index-key */
import React from 'react';
import { withTranslation } from 'react-i18next';
import TargetIcon from 'mdi-react/TargetIcon';

const OurMission = () => (
  <div>
    <div className="dashboard__booking-our-mission">
      <TargetIcon />
      <p className="dashboard__booking-our-mission-title">Our mission</p>
      <p>We are inspired by the customer’s happiness and their ability to travel! </p>
    </div>
  </div>
);

export default withTranslation('common')(OurMission);
