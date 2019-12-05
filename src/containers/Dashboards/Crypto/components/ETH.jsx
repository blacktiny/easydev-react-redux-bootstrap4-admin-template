import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  AreaChart, Tooltip, Area, ResponsiveContainer, XAxis,
} from 'recharts';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';
import PropTypes from 'prop-types';

const data = [{ name: 'Mon', eth: 70.23 },
  { name: 'Tue', eth: 80.5 },
  { name: 'Wed', eth: 38.45 },
  { name: 'Thu', eth: 89.2 },
  { name: 'Fri', eth: 105.61 },
  { name: 'Sat', eth: 98.6 },
  { name: 'Sun', eth: 115 }];

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

export default class ETH extends PureComponent {
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
              <h5 className="bold-text">ETH</h5>
              <h5 className="subhead">Ethereum</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <TrendingDownIcon className="dashboard__trend-icon" />
              <p className="dashboard__total-stat">
                ${(activeItem.eth).toFixed(2)}
              </p>
              <div className="dashboard__chart-container">
                <ResponsiveContainer height={70}>
                  <AreaChart data={data} margin={{ top: 0, left: 0, bottom: 0 }}>
                    <Tooltip content={<CustomTooltip />} />
                    <XAxis
                      hide
                      reversed={dir === 'rtl'}
                    />
                    <Area
                      name="ETH"
                      type="monotone"
                      dataKey="eth"
                      fill="#f198ca"
                      stroke="#f198ca"
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
