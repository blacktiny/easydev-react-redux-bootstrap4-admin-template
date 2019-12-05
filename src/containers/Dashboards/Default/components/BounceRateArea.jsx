import React from 'react';
import { connect } from 'react-redux';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

import getTooltipStyles from '../../../../shared/helpers';

const data = [
  { name: '12.03', uv: 4000 },
  { name: '13.03', uv: 3000 },
  { name: '14.03', uv: 2000 },
  { name: '15.03', uv: 2780 },
  { name: '16.03', uv: 1890 },
  { name: '17.03', uv: 2390 },
  { name: '18.03', uv: 3490 },
  { name: '19.03', uv: 3490 },
  { name: '20.03', uv: 3490 },
  { name: '21.03', uv: 3490 },
];

const BounceRateArea = ({ t, dir, themeName }) => (
  <Panel xl={5} lg={6} md={12} title={t('dashboard_default.bounce_rate')}>
    <p className="dashboard__bounce-percent">32%</p>
    <div dir="ltr">
      <ResponsiveContainer height={220} className="dashboard__area">
        <AreaChart
          data={data}
          margin={{
            top: 0, right: 0, left: -15, bottom: 0,
          }}
        >
          <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
          <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
          <CartesianGrid vertical={false} />
          <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
          <Area type="monotone" dataKey="uv" stroke="#24d6a3" fill="#4ce1b6" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Panel>
);

BounceRateArea.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(BounceRateArea));
