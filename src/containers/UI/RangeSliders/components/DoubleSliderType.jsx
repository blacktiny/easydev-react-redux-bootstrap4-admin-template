import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Range from '../../../../shared/components/range_slider/Range';

const DoubleSliderType = ({ t }) => (
  <Col md={12} lg={6} xs={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.range_sliders.double_slider_type')}</h5>
          <h5 className="subhead">Use default range</h5>
        </div>
        <div dir="ltr">
          <Range min={0} max={1000} value={[350, 635]} tipFormatter={value => `$${value}`} />
        </div>
      </CardBody>
    </Card>
  </Col>
);

DoubleSliderType.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(DoubleSliderType);
