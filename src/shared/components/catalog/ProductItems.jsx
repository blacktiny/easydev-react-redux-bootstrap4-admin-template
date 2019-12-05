/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardBody } from 'reactstrap';

const Sale = `${process.env.PUBLIC_URL}/img/for_store/catalog/sale_lable.png`;
const New = `${process.env.PUBLIC_URL}/img/for_store/catalog/new_lable.png`;

export default class Catalog extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
      colors: PropTypes.arrayOf(PropTypes.string),
      new: PropTypes.bool,
    })),
  };

  static defaultProps = {
    items: [],
  };

  render() {
    const { items } = this.props;

    return (
      <div className="catalog-items__wrap">
        <div className="catalog-items">
          {items.map((item, i) => (
            <CardBody className="catalog-item" key={i}>
              <Link className="catalog-item__link" to="/e-commerce/product_page">
                {item.new ? <img className="catalog-item__label" src={New} alt="new" /> : ''}
                {item.sale ? <img className="catalog-item__label" src={Sale} alt="sale" /> : ''}
                <div className="catalog-item__img-wrap">
                  <img className="catalog-item__img" src={item.src} alt="catalog-item-img" />
                </div>
                <div className="catalog-item__info">
                  <h4 className="catalog-item__title">{item.title}</h4>
                  <p className="catalog-item__description">{item.description}</p>
                  <h1 className="catalog-item__price">${item.price}</h1>
                  {item.sale ? <p className="catalog-item__old-price">${item.oldPrice}</p> : ''}
                  {item.colors.map((c, index) => (
                    <span
                      key={index}
                      className="catalog-item__color"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </Link>
            </CardBody>
          ))}
        </div>
      </div>
    );
  }
}
