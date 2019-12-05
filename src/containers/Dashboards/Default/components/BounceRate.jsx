/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [
  { name: 'Page A', pv: 25 },
  { name: 'Page B', pv: 30 },
  { name: 'Page C', pv: 55 },
  { name: 'Page D', pv: 42 },
  { name: 'Page E', pv: 85 },
  { name: 'Page F', pv: 45 },
  { name: 'Page G', pv: 21 },
  { name: 'Page H', pv: 56 },
  { name: 'Page I', pv: 68 },
  { name: 'Page J', pv: 32 },
];

class BounceRate extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }

  handleClick = (item) => {
    const index = data.indexOf(item.payload);
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex } = this.state;
    const activeItem = data[activeIndex];
    const { t } = this.props;

    return (
      <Col md={12} xl={3} lg={6} xs={12}>
        <Card>
          <CardBody className="dashboard__card-widget">
            <div className="card__title">
              <h5 className="bold-text">{t('dashboard_default.bounce_rate')}</h5>
            </div>
            <div className="dashboard__total">
              <TrendingUpIcon className="dashboard__trend-icon" />
              <p className="dashboard__total-stat">
                {(activeItem.pv)}%
              </p>
              <div className="dashboard__chart-container">
                <ResponsiveContainer height={50}>
                  <BarChart data={data}>
                    <Bar dataKey="pv" onClick={this.handleClick}>
                      {
                        data.map((entry, index) => (
                          <Cell
                            cursor="pointer"
                            fill={index === activeIndex ? '#4ce1b6' : '#f6da6e'}
                            key={`cell-${index}`}
                          />
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(BounceRate);
