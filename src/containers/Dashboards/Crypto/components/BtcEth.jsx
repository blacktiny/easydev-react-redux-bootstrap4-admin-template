import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Brush, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '../../../../shared/components/Panel';

import getTooltipStyles from '../../../../shared/helpers';

const data = [{ name: '25.04', btc: 59, eth: 140 },
  { name: '26.04', btc: 86, eth: 150 },
  { name: '27.04', btc: 139, eth: 98 },
  { name: '28.04', btc: 148, eth: 122 },
  { name: '29.04', btc: 152, eth: 110 },
  { name: '30.04', btc: 152, eth: 110 },
  { name: '1.05', btc: 140, eth: 170 },
  { name: '2.05', btc: 59, eth: 140 },
  { name: '3.05', btc: 86, eth: 150 },
  { name: '4.05', btc: 139, eth: 98 },
  { name: '5.05', btc: 50, eth: 122 },
  { name: '6.05', btc: 85, eth: 75 },
  { name: '7.05', btc: 152, eth: 90 },
  { name: '8.05', btc: 140, eth: 170 }];

const brush = (theme) => {
  if (theme === 'theme-light') {
    return '#f2f4f7';
  }
  return '#38373f';
};

const BtcEth = ({ theme, dir }) => (
  <Panel xl={8} lg={7} md={12} xs={12} title="BTC & ETH" subhead="Ratings by Market Capitalization">
    <div dir="ltr">
      <ResponsiveContainer height={280} className="dashboard__area">
        <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
          <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
          <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
          <Tooltip {...getTooltipStyles(theme, 'defaultItems')} />
          <Legend />
          <CartesianGrid />
          <Brush dataKey="name" height={12} stroke={brush(theme)} fill={brush(theme)} />
          <Area
            name="BTC"
            type="monotone"
            dataKey="eth"
            fill="#4ce1b6"
            stroke="#4ce1b6"
            fillOpacity={0.2}
          />
          <Area name="ETH" type="monotone" dataKey="btc" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Panel>
);

BtcEth.propTypes = {
  theme: PropTypes.string.isRequired,
  dir: PropTypes.string.isRequired,
};

export default BtcEth;
