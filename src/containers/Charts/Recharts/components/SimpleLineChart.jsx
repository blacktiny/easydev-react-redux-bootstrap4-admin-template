import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const SimpleLineChart = ({ t, dir }) => (
  <Col xs={12} md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('charts.recharts.simple_line_chart')}</h5>
        </div>
        <div dir="ltr">
          <ResponsiveContainer height={300}>
            <LineChart
              data={data}
              margin={{
                top: 0, right: 0, left: -15, bottom: 0,
              }}
            >
              <XAxis dataKey="name" reversed={dir === 'rtl'} />
              <YAxis orientation={dir === 'rtl' ? 'right' : 'left'} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#4ce1b6" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#70bbfd" />
              <Line type="monotone" dataKey="amt" stroke="#f6da6e" activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  </Col>
);

SimpleLineChart.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
};

export default withTranslation('common')(SimpleLineChart);
