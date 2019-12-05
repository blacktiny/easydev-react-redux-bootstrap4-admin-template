import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  AreaChart, Tooltip, Area, ResponsiveContainer, XAxis,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import PropTypes from 'prop-types';

const data = [{ name: 'Mon', bch: 70.23 },
  { name: 'Tue', bch: 80.5 },
  { name: 'Wed', bch: 38.45 },
  { name: 'Thu', bch: 89.2 },
  { name: 'Fri', bch: 105.61 },
  { name: 'Sat', bch: 98.6 },
  { name: 'Sun', bch: 115 }];

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

export default class BCH extends PureComponent {
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
              <h5 className="bold-text">Bch</h5>
              <h5 className="subhead">Bitcoin Cash</h5>
            </div>
            <div className="dashboard__total dashboard__total--area">
              <TrendingUpIcon className="dashboard__trend-icon" />
              <p className="dashboard__total-stat">
                ${(activeItem.bch).toFixed(2)}
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
                      name="BCH"
                      type="monotone"
                      dataKey="bch"
                      fill="#6faae1"
                      stroke="#6faae1"
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
