import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';
import OccupancyTooltipContent from './OccupancyTooltipContent';

const data = [
  {
    name: 'Mon 10/07',
    uv: 95,
    departure: 75,
    arrival: 10,
  },
  {
    name: 'Tue 11/07',
    uv: 85,
    departure: 23,
    arrival: 65,
  },
  {
    name: 'Wed 12/07',
    uv: 47,
    departure: 26,
    arrival: 45,
  },
  {
    name: 'Thu 13/07',
    uv: 80,
    departure: 25,
    arrival: 45,
  },
  {
    name: 'Fri 14/07',
    uv: 55,
    departure: 35,
    arrival: 15,
  },
  {
    name: 'Sat 15/07',
    uv: 99,
    departure: 30,
    arrival: 40,
  },
  {
    name: 'Sun 16/07',
    uv: 85,
    departure: 48,
    arrival: 26,
  },
];

class Occupancy extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    dir: PropTypes.string.isRequired,
    themeName: PropTypes.string.isRequired,
  };

  toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`;

  render() {
    const { t, dir, themeName } = this.props;

    return (
      <Panel
        xl={6}
        lg={12}
        md={12}
        title={t('dashboard_booking.occupancy')}
        subhead="See how effective your business is"
      >
        <div dir="ltr">
          <ResponsiveContainer height={260}>
            <ComposedChart data={data} margin={{ top: 20, left: -15 }}>
              <XAxis dataKey="name" tickLine={false} padding={{ left: 20 }} reversed={dir === 'rtl'} />
              <YAxis tickLine={false} tickFormatter={this.toPercent} orientation={dir === 'rtl' ? 'right' : 'left'} />
              <Tooltip content={<OccupancyTooltipContent colorForKey={{ uv: '#555555' }} theme={themeName} />} />
              <CartesianGrid vertical={false} />
              <Bar dataKey="uv" name="Stay overs" fill="#f2f4f7" barSize={20} />
              <Line type="linear" name="Departures" dataKey="departure" stroke="#b8e986" />
              <Line type="linear" name="Arrivals" dataKey="arrival" stroke="#48b5ff" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <hr />
        <div>
          <Table responsive className="table dashboard__occupancy-table">
            <tbody>
              <tr>
                <td className="td-head">Arrivals</td>
                <td className="td-blue">24</td>
                <td className="td-blue">74</td>
                <td className="td-blue">54</td>
                <td className="td-blue">57</td>
                <td className="td-blue">32</td>
                <td className="td-blue">68</td>
                <td className="td-blue">53</td>
              </tr>
              <tr>
                <td className="td-head">Departures</td>
                <td className="td-green">75</td>
                <td className="td-green">65</td>
                <td className="td-green">46</td>
                <td className="td-green">35</td>
                <td className="td-green">65</td>
                <td className="td-green">21</td>
                <td className="td-green">34</td>
              </tr>
              <tr>
                <td className="td-head">Stay overs</td>
                <td className="td-gray">3113</td>
                <td className="td-gray">2424</td>
                <td className="td-gray">4545</td>
                <td className="td-gray">4543</td>
                <td className="td-gray">3432</td>
                <td className="td-gray">3211</td>
                <td className="td-gray">2112</td>
              </tr>
              <tr>
                <td className="td-head">Customers</td>
                <td className="td-gray">131</td>
                <td className="td-gray">133</td>
                <td className="td-gray">343</td>
                <td className="td-gray">342</td>
                <td className="td-gray">351</td>
                <td className="td-gray">234</td>
                <td className="td-gray">242</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Panel>
    );
  }
}

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(Occupancy));
