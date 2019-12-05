import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [
  {
    subject: 'Math', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Chinese', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'English', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Geography', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Physics', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'History', A: 65, B: 85, fullMark: 150,
  },
];

const SimpleRadarChart = ({ t }) => (
  <Col xs={12} md={12} lg={6} xl={4}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('charts.recharts.simple_radar_chart')}</h5>
        </div>
        <div dir="ltr">
          <ResponsiveContainer height={320}>
            <RadarChart data={data} outerRadius={80}>
              <PolarGrid strokeDasharray="3 3" />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar name="Mike" dataKey="A" stroke="#3ea3fc" fill="#70bbfd" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  </Col>
);

SimpleRadarChart.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SimpleRadarChart);
