// import React, { PureComponent } from 'react';
import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
// import { Progress } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';

const data01 = [{ value: 78, fill: '#b8e986' },
  { value: 23, fill: '#eeeeee' }];

const data02 = [{ value: 25, fill: '#ff4861' },
  { value: 75, fill: '#eeeeee' }];

const WeeklyStatMobile = ({ t }) => (
  <Panel
    md={12}
    lg={6}
    xl={3}
    xs={12}
    title={t('dashboard_mobile_app.weekly_stat_mobile')}
    subhead="Top selling items statistic by last month"
  >
    <div className="dashboard__weekly-stat">
      <div className="dashboard__weekly-stat-chart">
        <div className="dashboard__weekly-stat-chart-item">
          <div className="dashboard__weekly-stat-chart-pie">
            <ResponsiveContainer
              width={110}
            >
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
            <ResponsiveContainer
              width={110}
            >
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
    </div>
  </Panel>
);

WeeklyStatMobile.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(WeeklyStatMobile);
