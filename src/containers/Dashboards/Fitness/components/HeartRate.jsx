import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{ value: 68, fill: '#ff4861' },
  { value: 32, fill: '#eeeeee' }];

const HeartRate = ({ t }) => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text card__title-center">{t('dashboard_fitness.heartrate')}</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <HeartOutlineIcon style={{ fill: '#ff4861' }} />
            <p className="dashboard__health-chart-number">96</p>
            <p className="dashboard__health-chart-units">b/min</p>
          </div>
        </div>
        <p className="dashboard__goal">Reference: 58-120</p>
      </CardBody>
    </Card>
  </Col>
);

HeartRate.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(HeartRate);
