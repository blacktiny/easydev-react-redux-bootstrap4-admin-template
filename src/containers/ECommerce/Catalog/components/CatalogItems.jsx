import React from 'react';
import { Col } from 'reactstrap';
import ProductItems from '../../../../shared/components/catalog/ProductItems';
import catalogList from './catalog_list';

const CatalogItems = () => (
  <Col md={12} lg={12}>
    <ProductItems items={catalogList} />
  </Col>
);

export default CatalogItems;
