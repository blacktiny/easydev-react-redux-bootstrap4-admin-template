/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopTenEditForm from './components/TopTenEditForm';
import { changeCryptoTableData, loadCryptoTableData } from '../../../redux/actions/cryptoTableActions';

class CryptoDashboardEdit extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(loadCryptoTableData(match.params.index));
  }

  handleSubmit = (formValues) => {
    const { dispatch, match } = this.props;
    dispatch(changeCryptoTableData(formValues, match.params.index));
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/dashboard_crypto" />;
    }

    return (
      <Container className="dashboard">
        <Row>
          <TopTenEditForm onSubmit={this.handleSubmit} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cryptoTable: state.cryptoTable,
});

export default connect(mapStateToProps)(CryptoDashboardEdit);
