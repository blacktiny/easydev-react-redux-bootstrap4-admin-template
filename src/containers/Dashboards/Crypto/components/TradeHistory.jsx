import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';

const TradeHistory = ({ t }) => (
  <Panel
    xl={4}
    lg={5}
    md={12}
    xs={12}
    title={t('dashboard_crypto.trade_history')}
    subhead="Ratings by Market Capitalization"
  >
    <Table responsive striped>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Cost</th>
          <th>Change%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="bold-text dashboard__btc">BTC</p></td>
          <td>$ 134,23</td>
          <td>+12,21 %</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__eth">ETH</p></td>
          <td>$ 12,23</td>
          <td>+0,21 %</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__neo">NEO</p></td>
          <td>$ 112,23</td>
          <td>-2,27 %</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__ste">STE</p></td>
          <td>$ 84,23</td>
          <td>-10,01 %</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__eos">EOS</p></td>
          <td>$ 134,23</td>
          <td>$ 134,23</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__lit">LIT</p></td>
          <td>$ 94,23</td>
          <td>-1,96 %</td>
        </tr>
      </tbody>
    </Table>
  </Panel>
);

TradeHistory.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(TradeHistory);
