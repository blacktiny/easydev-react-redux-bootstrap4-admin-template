import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Cart from '../../../ECommerce/Cart/index';
import OrdersList from '../../../ECommerce/OrdersList/index';
import Payment from '../../../ECommerce/Payment/index';
import ProductEdit from '../../../ECommerce/ProductEdit/index';
import ProductsList from '../../../ECommerce/ProductsList/index';
import Catalog from '../../../ECommerce/Catalog/index';
import ProductPage from '../../../ECommerce/ProductPage/index';

export default () => (
  <Switch>
    <Route path="/e-commerce/cart" component={Cart} />
    <Route path="/e-commerce/catalog" component={Catalog} />
    <Route path="/e-commerce/orders_list" component={OrdersList} />
    <Route path="/e-commerce/payment" component={Payment} />
    <Route path="/e-commerce/product_edit" component={ProductEdit} />
    <Route path="/e-commerce/product_page" component={ProductPage} />
    <Route path="/e-commerce/products_list" component={ProductsList} />
  </Switch>
);
