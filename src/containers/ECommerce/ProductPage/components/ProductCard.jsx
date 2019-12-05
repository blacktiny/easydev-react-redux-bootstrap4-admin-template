import React, { useState } from 'react';
import {
  Card, CardBody, Col, ButtonToolbar,
} from 'reactstrap';
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Link } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import images from './imgs';
import ProductTabs from './ProductTabs';
import ColorSelect from './ColorSelect';

const ProductCard = () => {
  const [color, setColor] = useState('white');

  const onLike = () => {
    if (color === 'white') {
      setColor('#70bbfd');
    } else {
      setColor('white');
    }
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="product-card">
            <ProductGallery images={images} />
            <div className="product-card__info">
              <h3 className="product-card__title">French bulldog pillow</h3>
              <div className="product-card__rate">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarOutlineIcon />
                <a className="product-card__link" href="/easydev/e-commerce/product_page">See all reviews</a>
              </div>
              <h1 className="product-card__price">$17.19 <span className="product-card__old-price">$23</span></h1>
              <p className="typography-message">
                Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression
                for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved
                as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable
                cultivated admiration far.
              </p>
              <form className="form product-card__form">
                <div className="form__form-group">
                  <span className="form__form-group-label product-card__form-label">Select Color</span>
                  <div className="form__form-group-field">
                    <ColorSelect options={[
                      { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                      { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                      { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                    ]}
                    />
                  </div>
                </div>
                <ButtonToolbar className="product-card__btn-toolbar">
                  <Link className="btn btn-primary" to="/e-commerce/cart">Add to cart</Link>
                  <button
                    className="product-card__wish-btn"
                    type="button"
                    onClick={onLike}
                  >
                    <HeartIcon color={color} />Add to wishlist
                  </button>
                </ButtonToolbar>
              </form>
              <ProductTabs />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
