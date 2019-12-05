import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Slider from '../../../../shared/components/range_slider/Slider';

const SliderWithScale = ({ t }) => (
  <Col md={12} lg={6} xs={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.range_sliders.slider_with_scale')}</h5>
          <h5 className="subhead">Use default slider with property <span className="red-text">marks</span></h5>
        </div>
        <div dir="ltr">
          <Slider
            min={0}
            max={100}
            value={34}
            marks={{
              0: '0',
              10: '10',
              20: '20',
              30: '30',
              40: '40',
              50: '50',
              60: '60',
              70: '70',
              80: '80',
              90: '90',
              100: '100',
            }}
          />
        </div>
      </CardBody>
    </Card>
  </Col>
);

SliderWithScale.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SliderWithScale);
