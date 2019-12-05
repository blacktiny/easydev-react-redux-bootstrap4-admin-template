import React from 'react';
import { Col } from 'reactstrap';
import ProductItems from '../../../../shared/components/catalog/ProductItems';

import catalogList from '../../Catalog/components/catalog_list';

const RelatedItems = () => (
  <Col md={12} lg={12}>
    <ProductItems items={catalogList.slice(0, 4)} />
  </Col>
);

export default RelatedItems;
