/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Table,
} from 'reactstrap';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import classNames from 'classnames';
import { NewOrderTableProps } from '../../../../shared/prop-types/TablesProps';

import Panel from '../../../../shared/components/Panel';

const DropDownMore = ({ index, handleDeleteRow }) => (
  <UncontrolledDropdown className="dashboard__table-more">
    <DropdownToggle>
      <p><DotsHorizontalIcon /></p>
    </DropdownToggle>
    <DropdownMenu className="dropdown__menu">
      <Link to={`/dashboard_e_commerce/edit/${index}`}><DropdownItem>Edit</DropdownItem></Link>
      <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

DropDownMore.propTypes = {
  index: PropTypes.number.isRequired,
  handleDeleteRow: PropTypes.func.isRequired,
};

const NewOrderAmount = ({ quantity }) => {
  const amountClass = classNames({
    'dashboard__table-orders-amount': true,
    'dashboard__table-orders-amount--medium': quantity <= 100,
    'dashboard__table-orders-amount--low': quantity <= 20,
  });
  if (quantity > 150) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  } if (quantity > 100) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  } if (quantity > 50) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  } if (quantity > 20) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  }
  return (
    <div className={amountClass}>
      <div />
      <span>{quantity}</span>
    </div>
  );
};

NewOrderAmount.propTypes = {
  quantity: PropTypes.number,
};

NewOrderAmount.defaultProps = {
  quantity: 0,
};

const NewOrders = ({ t, newOrder, onDeleteRow }) => (
  <Panel
    xl={6}
    lg={12}
    md={12}
    title={t('dashboard_commerce.new_orders')}
    subhead="Top sales of the last week"
  >
    <Table responsive striped className="dashboard__table-orders">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Sold</th>
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {newOrder.map((order, index) => (
          <tr key={index}>
            <td className="dashboard__table-orders-title">
              <div className="dashboard__table-orders-img-wrap">
                <div className="dashboard__table-orders-img" style={{ backgroundImage: `url(${order.img})` }} />
              </div>
              {order.title}
            </td>
            <td>
              <NewOrderAmount quantity={order.quantity} />
            </td>
            <td>{order.sold}</td>
            <td className="dashboard__table-orders-total" dir="ltr">{order.total}</td>
            <td>
              <DropDownMore index={index} handleDeleteRow={e => onDeleteRow(index, e)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Link to="/e-commerce/catalog" className="dashboard__table-orders-link">All products <ChevronDownIcon /></Link>
  </Panel>
);

NewOrders.propTypes = {
  newOrder: NewOrderTableProps.isRequired,
  onDeleteRow: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(NewOrders);
