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

const data01 = [{ name: 'Cycling', value: 10, fill: '#4ce1b6' },
  { name: 'Walking', value: 37, fill: '#70bbfd' },
  { name: 'Run', value: 21, fill: '#f6da6e' },
  { name: 'Swimming', value: 32, fill: '#ff4861' }];

const style = (dir) => {
  const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return ({
    ...left,
    width: 150,
    lineHeight: '24px',
    position: 'absolute',
    margin: '10px',
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

class ActivityRating extends PureComponent {
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
      <Panel lg={12} xl={6} md={12} title={t('dashboard_fitness.activity_rating')}>
        <div dir="ltr">
          <ResponsiveContainer className="dashboard__chart-pie dashboard__chart-pie--fitness" width="100%" height={360}>
            <PieChart className="dashboard__chart-pie-container">
              <Tooltip position={{ x, y }} {...getTooltipStyles(themeName)} />
              <Pie
                data={data01}
                dataKey="value"
                cy={180}
                innerRadius={100}
                outerRadius={140}
                label
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

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(ActivityRating));
