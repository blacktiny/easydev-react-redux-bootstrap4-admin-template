import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import MapMarkerRadiusIcon from 'mdi-react/MapMarkerRadiusIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{ value: 3.8, fill: '#70bbfd' },
  { value: 0.2, fill: '#eeeeee' }];

const Distance = ({ t }) => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text card__title-center">{t('dashboard_fitness.distance')}</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <MapMarkerRadiusIcon style={{ fill: '#70bbfd' }} />
            <p className="dashboard__health-chart-number">3.8</p>
            <p className="dashboard__health-chart-units">km</p>
          </div>
        </div>
        <p className="dashboard__goal">Goal: 4 km</p>
      </CardBody>
    </Card>
  </Col>
);

Distance.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Distance);
