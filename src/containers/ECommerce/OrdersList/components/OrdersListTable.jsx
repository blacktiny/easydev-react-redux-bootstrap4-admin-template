/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import EditTable from '../../../../shared/components/table/EditableTable';

const MoneyFormatter = ({ value }) => (
  <div>
      ${value}
  </div>
);

MoneyFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Enabled</span>
    : <span className="badge badge-disabled">Disabled</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default class OrdersListTable extends PureComponent {
  constructor() {
    super();
    this.heads = [
      {
        key: 'id',
        name: 'ID',
        width: 80,
        sortable: true,
      },
      {
        key: 'date',
        name: 'Date',
        sortable: true,
      },
      {
        key: 'customer_name',
        name: 'Customer Name',
        sortable: true,
      },
      {
        key: 'price',
        name: 'Price',
        sortable: true,
        formatter: MoneyFormatter,
      },
      {
        key: 'tax',
        name: 'Tax',
        sortable: true,
        formatter: MoneyFormatter,
      },
      {
        key: 'delivery',
        name: 'Delivery',
        sortable: true,
        formatter: MoneyFormatter,
      },
      {
        key: 'quantity',
        name: 'Quantity',
        sortable: true,
      },
      {
        key: 'status',
        name: 'Status',
        sortable: true,
        formatter: StatusFormatter,
        width: 110,
      },
    ];

    this.state = {
      rows: this.createRows(17),
      pageOfItems: [],
    };
  }

  onChangePage = (pageOfItems) => {
    // update state with new page of items
    this.setState({ pageOfItems });
  };

  getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  createRows = (numberOfRows) => {
    const rows = [];

    for (let i = 1; i < numberOfRows + 1; i += 1) {
      rows.push({
        id: Math.min(99999, Math.round((Math.random() * 99999) + 1000)),
        date: this.getRandomDate(new Date(2017, 3, 1), new Date(2018, 3, 1)),
        customer_name: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        price: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
        tax: Math.min(10, Math.random() * 10).toFixed(2),
        delivery: Math.min(10, Math.random() * 10).toFixed(2),
        quantity: Math.min(5, Math.round((Math.random() * 5) + 1)),
        status: ['Enabled', 'Disabled'][Math.floor((Math.random() * 2))],
      });
    }
    return rows;
  };

  render() {
    const { rows } = this.state;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Orders list</h5>
            </div>
            <p className="typography-message">Show
              <select className="select-options">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              entries
            </p>
            <EditTable heads={this.heads} rows={rows} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
