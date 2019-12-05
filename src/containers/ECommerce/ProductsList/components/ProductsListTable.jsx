/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import {
  ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import EditTable from '../../../../shared/components/table/EditableTable';


const Img1 = `${process.env.PUBLIC_URL}/img/for_store/vase.png`;
const Img2 = `${process.env.PUBLIC_URL}/img/for_store/vase_2.png`;
const Img3 = `${process.env.PUBLIC_URL}/img/for_store/vase_3.png`;
const Img4 = `${process.env.PUBLIC_URL}/img/for_store/fur.png`;
const Img5 = `${process.env.PUBLIC_URL}/img/for_store/pillow.png`;
const Img6 = `${process.env.PUBLIC_URL}/img/for_store/pillow_2.png`;
const Img7 = `${process.env.PUBLIC_URL}/img/for_store/pillow_dog.png`;

const PhotoFormatter = ({ value }) => (
  <div className="products-list__img-wrap">
    <img src={value} alt="" />
  </div>
);

PhotoFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Enabled</span>
    : <span className="badge badge-disabled">Disabled</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default class ProductsListTable extends PureComponent {
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
        key: 'photo',
        name: 'Photo',
        formatter: PhotoFormatter,
      },
      {
        key: 'name',
        name: 'Name',
        sortable: true,
      },
      {
        key: 'category',
        name: 'Category',
        sortable: true,
      },
      {
        key: 'quantity',
        name: 'Quantity',
        sortable: true,
      },
      {
        key: 'articul',
        name: 'Articul',
        sortable: true,
      },
      {
        key: 'price',
        name: 'Price, $',
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
        photo: [Img1, Img2, Img3, Img4, Img5, Img6, Img7][Math.floor((Math.random() * 7))],
        name: ['Glass Vase', 'Pillow'][Math.floor((Math.random() * 2))],
        category: 'Home accessories',
        quantity: Math.min(400, Math.round(Math.random() * 400)),
        articul: `art${Math.min(99999, Math.round((Math.random() * 99999) + 1))}`,
        price: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
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
          <CardBody className="products-list">
            <div className="card__title">
              <h5 className="bold-text">Products List</h5>
              <ButtonToolbar className="products-list__btn-toolbar-top">
                <form className="form">
                  <div className="form__form-group products-list__search">
                    <input placeholder="Search..." name="search" />
                    <MagnifyIcon />
                  </div>
                </form>
                <Link className="btn btn-primary products-list__btn-add" to="/e-commerce/product_edit">Add new
                  product
                </Link>
              </ButtonToolbar>
            </div>
            <p className="typography-message">Show
              <select className="select-options">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              entries
            </p>
            <EditTable heads={this.heads} rows={rows} enableRowSelect />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
