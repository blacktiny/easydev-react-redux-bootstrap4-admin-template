import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  AreaChart, Tooltip, Area, ResponsiveContainer, XAxis,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import PropTypes from 'prop-types';

const data = [{ name: 'Mon', btc: 70.23 },
  { name: 'Tue', btc: 80.5 },
  { name: 'Wed', btc: 38.45 },
  { name: 'Thu', btc: 89.2 },
  { name: 'Fri', btc: 105.61 },
  { name: 'Sat', btc: 98.6 },
  { name: 'Sun', btc: 115 }];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="dashboard__total-tooltip">
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
  })),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: null,
};

export default class BTC extends PureComponent {
  static propTypes = {
    dir: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const { dir } = this.props;
    const { activeIndex } = this.state;
    const activeItem = data[activeIndex];

    return (
      <Col md={12} xl={3} lg={6} xs={12}>
        <Card>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              <h5 className="bold-text">BTC</h5>
              <h5 className="subhead">Bitcoin</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <TrendingUpIcon className="dashboard__trend-icon" />
              <p className="dashboard__total-stat">
                ${(activeItem.btc).toFixed(2)}
              </p>
              <div className="dashboard__chart-container">
                <ResponsiveContainer height={70}>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 0, left: 0, bottom: 0,
                    }}
                  >
                    <XAxis
                      hide
                      reversed={dir === 'rtl'}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      name="BTC"
                      type="monotone"
                      dataKey="btc"
                      fill="#4ce1b6"
                      stroke="#4ce1b6"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
