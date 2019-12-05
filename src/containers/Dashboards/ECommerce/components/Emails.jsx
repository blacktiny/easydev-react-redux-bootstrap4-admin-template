import React from 'react';
import { Progress } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const Emails = ({ t }) => (
  <Panel md={12} lg={5} xl={3} sm={12} xs={12} title={t('dashboard_commerce.emails')}>
    <div className="progress-wrap progress-wrap--small progress-wrap--pink progress-wrap--label-top">
      <p>Open rate</p>
      <Progress value={84}><p className="progress__label">84%</p></Progress>
    </div>
    <div className="progress-wrap progress-wrap--small progress-wrap--label-top">
      <p>Sent</p>
      <Progress value={60}><p className="progress__label">121/300</p></Progress>
    </div>
  </Panel>
);

Emails.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Emails);
