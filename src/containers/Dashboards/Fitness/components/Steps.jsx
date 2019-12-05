import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import WalkIcon from 'mdi-react/WalkIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{ value: 1200, fill: '#4ce1b6' },
  { value: 800, fill: '#eeeeee' }];

const Steps = ({ t }) => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text card__title-center">{t('dashboard_fitness.steps')}</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <WalkIcon style={{ fill: '#4ce1b6' }} />
            <p className="dashboard__health-chart-number">1.2k</p>
            <p className="dashboard__health-chart-units">steps</p>
          </div>
        </div>
        <p className="dashboard__goal">Goal: 2000 steps</p>
      </CardBody>
    </Card>
  </Col>
);

Steps.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Steps);
