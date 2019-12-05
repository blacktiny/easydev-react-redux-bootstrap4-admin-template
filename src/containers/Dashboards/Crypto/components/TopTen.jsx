/* eslint-disable react/no-array-index-key,react/no-typos */
import React from 'react';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import {
  DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import { CryptoTableProps } from '../../../../shared/prop-types/TablesProps';
import Panel from '../../../../shared/components/Panel';

const data = [
  {
    name: 'Mon',
    btc: 70.23,
    eth: 54.23,
    xrp: 85.23,
    bch: 47.23,
    eos: 25.23,
    ltc: 69.23,
    ada: 52.23,
    xlm: 78.23,
    iota: 78.23,
    neo: 78.23,
  },
  {
    name: 'Tue',
    btc: 25.5,
    eth: 72.5,
    xrp: 25.5,
    bch: 29.5,
    eos: 78.5,
    ltc: 87.5,
    ada: 98.5,
    xlm: 28.5,
    iota: 98.5,
    neo: 28.5,
  },
  {
    name: 'Wed',
    btc: 78.45,
    eth: 78.45,
    xrp: 58.45,
    bch: 32.45,
    eos: 45.45,
    ltc: 45.45,
    ada: 78.45,
    xlm: 25.45,
    iota: 78.45,
    neo: 25.45,
  },
  {
    name: 'Thu',
    btc: 45.2,
    eth: 35.2,
    xrp: 45.2,
    bch: 78.2,
    eos: 89.2,
    ltc: 25.2,
    ada: 48.2,
    xlm: 98.2,
    iota: 48.2,
    neo: 98.2,
  },
  {
    name: 'Fri',
    btc: 56.61,
    eth: 78.61,
    xrp: 35.61,
    bch: 105.61,
    eos: 45.61,
    ltc: 78.61,
    ada: 88.61,
    xlm: 86.61,
    iota: 88.61,
    neo: 86.61,
  },
  {
    name: 'Sat',
    btc: 110.6,
    eth: 45.6,
    xrp: 57.6,
    bch: 78.6,
    eos: 55.6,
    ltc: 35.6,
    ada: 78.6,
    xlm: 32.6,
    iota: 78.6,
    neo: 32.6,
  },
  {
    name: 'Sun',
    btc: 115,
    eth: 115,
    xrp: 115,
    bch: 115,
    eos: 115,
    ltc: 115,
    ada: 115,
    xlm: 115,
    iota: 115,
    neo: 115,
  },
];

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

const DropDownMore = ({ index, handleDeleteRow }) => (
  <UncontrolledDropdown className="dashboard__table-more">
    <DropdownToggle>
      <p><DotsHorizontalIcon /></p>
    </DropdownToggle>
    <DropdownMenu className="dropdown__menu">
      <Link to={`/dashboard_crypto/edit/${index}`}><DropdownItem>Edit</DropdownItem></Link>
      <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

DropDownMore.propTypes = {
  index: PropTypes.number.isRequired,
  handleDeleteRow: PropTypes.func.isRequired,
};

const TopTen = ({ cryptoTable, onDeleteCryptoTableData, t }) => (
  <Panel lg={12} title={t('dashboard_crypto.top_cryptocurrencies')}>
    <Table responsive className="table--bordered dashboard__table-crypto">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>Volume</th>
          <th>Circulating Supply</th>
          <th>Change</th>
          <th dir="ltr">Graph (7 days)</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {cryptoTable.map((crypto, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{crypto.name}</td>
            <td dir="ltr">{crypto.market_cap}</td>
            <td dir="ltr">{crypto.price}</td>
            <td dir="ltr">{crypto.volume}</td>
            <td dir="ltr">{crypto.supply} {crypto.chart}</td>
            <td>{crypto.change}</td>
            <td className="dashboard__table-crypto-chart">
              <ResponsiveContainer height={36}>
                <AreaChart data={data} margin={{ top: 0, left: 0, bottom: 0 }}>
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey={crypto.chart}
                    fill="#4ce1b6"
                    stroke="#4ce1b6"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </td>
            <td>
              <DropDownMore index={index} handleDeleteRow={e => onDeleteCryptoTableData(index, e)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Panel>
);

TopTen.propTypes = {
  cryptoTable: CryptoTableProps.isRequired,
  onDeleteCryptoTableData: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(TopTen);
