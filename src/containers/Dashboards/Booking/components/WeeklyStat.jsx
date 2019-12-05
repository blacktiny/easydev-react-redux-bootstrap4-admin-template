import React, { PureComponent } from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import Panel, { PanelTitle } from '../../../../shared/components/Panel';

const data01 = [{ value: 78, fill: '#b8e986' },
  { value: 23, fill: '#eeeeee' }];

const data02 = [{ value: 25, fill: '#ff4861' },
  { value: 75, fill: '#eeeeee' }];


class SocialScore extends PureComponent {
  static propTypes = {
    progress: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    const { children, progress } = this.props;
    return (
      <div className="dashboard__social-stat-item">
        <div className="dashboard__social-stat-title">
          {children}
        </div>
        <div className="dashboard__social-stat-progress">
          <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
            <p className="progress__label">{progress}%</p>
            <Progress value={progress} />
          </div>
        </div>
      </div>
    );
  }
}


const WeeklyStat = ({ t }) => (
  <Panel
    md={12}
    lg={6}
    xl={3}
    xs={12}
    title={t('dashboard_booking.weekly_stat')}
    subhead="Top selling items statistic by last month"
  >
    <div className="dashboard__weekly-stat">
      <div className="dashboard__weekly-stat-chart">
        <div className="dashboard__weekly-stat-chart-item">
          <div className="dashboard__weekly-stat-chart-pie">
            <ResponsiveContainer>
              <PieChart className="dashboard__weekly-stat-chart-pie-wrapper">
                <Pie
                  data={data01}
                  dataKey="value"
                  cx={50}
                  cy={50}
                  innerRadius={50}
                  outerRadius={55}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="dashboard__weekly-stat-label" style={{ color: '#b8e986' }}>78%</p>
          </div>
          <div className="dashboard__weekly-stat-info">
            <p>Customers satisfaction rate</p>
          </div>
        </div>
        <div className="dashboard__weekly-stat-chart-item">
          <div className="dashboard__weekly-stat-chart-pie">
            <ResponsiveContainer>
              <PieChart className="dashboard__weekly-stat-chart-pie-wrapper">
                <Pie
                  data={data02}
                  dataKey="value"
                  cx={50}
                  cy={50}
                  innerRadius={50}
                  outerRadius={55}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="dashboard__weekly-stat-label" style={{ color: '#ff4861' }}>25%</p>
          </div>
          <div className="dashboard__weekly-stat-info">
            <p>Negative <br />feedback</p>
          </div>
        </div>
      </div>
      <hr />
      <PanelTitle title={t('dashboard_booking.social_score')} />
      <div className="dashboard__social-stat">
        <SocialScore progress={87}>
          Booking.com
        </SocialScore>
        <SocialScore progress={65}>
          Airbnb
        </SocialScore>
        <SocialScore progress={92}>
          Tripadvisor
        </SocialScore>
        <SocialScore progress={81}>
          Tripadvisor
        </SocialScore>
      </div>
    </div>
  </Panel>
);

WeeklyStat.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(WeeklyStat);
