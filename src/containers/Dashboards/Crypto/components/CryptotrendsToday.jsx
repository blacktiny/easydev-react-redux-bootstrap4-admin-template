/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  PieChart, Pie, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

import getTooltipStyles from '../../../../shared/helpers';

const data01 = [{ name: 'Bitcoin', value: 20432, fill: '#4ce1b6' },
  { name: 'Ethereum', value: 15432, fill: '#70bbfd' },
  { name: 'Bitcoin Cash', value: 12934, fill: '#f6da6e' },
  { name: 'Ripple', value: 9934, fill: '#ff4861' }];

const style = (dir) => {
  const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return ({
    ...left,
    width: 150,
    lineHeight: '24px',
    position: 'absolute',
  });
};


const renderLegend = ({ payload }) => (
  <ul className="dashboard__chart-legend">
    {
        payload.map((entry, index) => (
          <li key={`item-${index}`}><span style={{ backgroundColor: entry.color }} />{entry.value}</li>
        ))
      }
  </ul>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    vslue: PropTypes.string,
  })).isRequired,
};

class CryptotrendsToday extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    dir: PropTypes.string.isRequired,
    themeName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  onMouseMove = (e) => {
    const { dir } = this.props;
    if (e.tooltipPosition) {
      this.setState({ x: dir === 'ltr' ? e.tooltipPosition.x : e.tooltipPosition.x / 10, y: e.tooltipPosition.y });
    }
  };

  render() {
    const { t, dir, themeName } = this.props;
    const { x, y } = this.state;

    return (
      <Panel
        lg={12}
        xl={6}
        xs={12}
        title={t('dashboard_crypto.cryptotrends_today')}
        subhead="Top selling items statistic by last month"
      >
        <div dir={dir}>
          <ResponsiveContainer className="dashboard__chart-pie dashboard__chart-pie--crypto" height={360}>
            <PieChart className="dashboard__chart-pie-container">
              <Tooltip
                formatter={value => (`$${value.toFixed(2)}`)}
                position={{ x, y }}
                {...getTooltipStyles(themeName)}
              />
              <Pie
                data={data01}
                dataKey="value"
                cy={175}
                innerRadius={130}
                outerRadius={160}
                label={value => (`$${value.value.toFixed(2)}`)}
                onMouseMove={this.onMouseMove}
              />
              <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style(dir)} content={renderLegend} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    );
  }
}

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(CryptotrendsToday));
