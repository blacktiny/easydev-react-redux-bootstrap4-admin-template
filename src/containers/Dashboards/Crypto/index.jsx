import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BTC from './components/BTC';
import ETH from './components/ETH';
import BCH from './components/BCH';
import XRP from './components/XRP';
import TradeHistory from './components/TradeHistory';
import BtcEth from './components/BtcEth';
import CryptotrendsToday from './components/CryptotrendsToday';
import TopTen from './components/TopTen';
import PlaceOrder from './components/PlaceOrder';
import { deleteCryptoTableData } from '../../../redux/actions/cryptoTableActions';
import { CryptoTableProps } from '../../../shared/prop-types/TablesProps';
import { ThemeProps, RTLProps } from '../../../shared/prop-types/ReducerProps';

class CryptoDashboard extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    cryptoTable: CryptoTableProps.isRequired,
    dispatch: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
    theme: ThemeProps.isRequired,
  };

  onDeleteCryptoTableData = (index, e) => {
    const { dispatch, cryptoTable } = this.props;
    e.preventDefault();
    const arrayCopy = [...cryptoTable];
    arrayCopy.splice(index, 1);
    dispatch(deleteCryptoTableData(arrayCopy));
  };

  render() {
    const {
      t, cryptoTable, rtl, theme,
    } = this.props;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t('dashboard_crypto.page_title')}</h3>
          </Col>
        </Row>
        <Row>
          <BTC dir={rtl.direction} />
          <ETH dir={rtl.direction} />
          <BCH dir={rtl.direction} />
          <XRP dir={rtl.direction} />
        </Row>
        <Row>
          <TradeHistory />
          <BtcEth
            dir={rtl.direction}
            theme={theme.className}
          />
          <CryptotrendsToday dir={rtl.direction} />
          <PlaceOrder />
          <TopTen cryptoTable={cryptoTable} onDeleteCryptoTableData={this.onDeleteCryptoTableData} />
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  cryptoTable: state.cryptoTable.items,
  rtl: state.rtl,
  theme: state.theme,
}))(withTranslation('common')(CryptoDashboard));
