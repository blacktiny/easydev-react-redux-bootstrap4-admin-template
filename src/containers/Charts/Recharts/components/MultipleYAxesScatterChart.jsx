import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const data02 = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
  { x: 500, y: 400, z: 200 },
  { x: 300, y: 500, z: 260 },
  { x: 240, y: 300, z: 400 },
  { x: 320, y: 550, z: 280 },
  { x: 500, y: 400, z: 500 },
  { x: 420, y: 280, z: 200 },
];

const MultipleYAxesScatterChart = ({ t, dir }) => (
  <Col xs={12} md={12} lg={6} xl={4}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('charts.recharts.multiple_scatter_chart')}</h5>
        </div>
        <div dir="ltr">
          <ResponsiveContainer height={300}>
            <ScatterChart
              margin={{
                top: 0, right: 0, bottom: 0, left: -15,
              }}
            >
              <XAxis type="number" dataKey="x" name="stature" unit="cm" reversed={dir === 'rtl'} />
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis
                yAxisId="left"
                type="number"
                dataKey="y"
                name="weight"
                unit="kg"
                stroke="#70bbfd"
                orientation={dir === 'rtl' ? 'right' : 'left'}
              />
              <YAxis
                yAxisId="right"
                type="number"
                dataKey="y"
                name="weight"
                unit="kg"
                stroke="#f6da6e"
                orientation={dir === 'rtl' ? 'left' : 'right'}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter yAxisId="left" name="A school" data={data01} fill="#70bbfd" />
              <Scatter yAxisId="right" name="A school" data={data02} fill="#f6da6e" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  </Col>
);

MultipleYAxesScatterChart.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
};

export default withTranslation('common')(MultipleYAxesScatterChart);
