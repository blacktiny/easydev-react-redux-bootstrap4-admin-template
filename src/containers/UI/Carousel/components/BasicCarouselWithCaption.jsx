import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Carousel from '../../../../shared/components/carousel/CarouselSingle';

const Slide1 = `${process.env.PUBLIC_URL}/img/5.png`;
const Slide2 = `${process.env.PUBLIC_URL}/img/6.png`;

const BasicCarouselWithCaption = ({ t }) => (
  <Col md={12} lg={6} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.carousel.basic_carousel_with_caption')}</h5>
          <h5 className="subhead">Use the component <span className="red-text">CarouselSingle</span> with text</h5>
        </div>
        <Carousel>
          <div>
            <img src={Slide2} alt="slide" />
            <div className="slick-slider__caption">
              <p className="slick-slider__caption-title">Sayan mountains, Siberia</p>
              <p className="slick-slider__caption-description">Folly words widow one downs few age every seven.</p>
            </div>
          </div>
          <div>
            <img src={Slide1} alt="slide" />
            <div className="slick-slider__caption">
              <p className="slick-slider__caption-title">Sayan mountains, Siberia</p>
              <p className="slick-slider__caption-description">Folly words widow one downs few age every seven.</p>
            </div>
          </div>
          <div>
            <img src={Slide2} alt="slide" />
            <div className="slick-slider__caption">
              <p className="slick-slider__caption-title">Sayan mountains, Siberia</p>
              <p className="slick-slider__caption-description">Folly words widow one downs few age every seven.</p>
            </div>
          </div>
          <div>
            <img src={Slide1} alt="slide" />
            <div className="slick-slider__caption">
              <p className="slick-slider__caption-title">Sayan mountains, Siberia</p>
              <p className="slick-slider__caption-description">Folly words widow one downs few age every seven.</p>
            </div>
          </div>
        </Carousel>
      </CardBody>
    </Card>
  </Col>
);

BasicCarouselWithCaption.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BasicCarouselWithCaption);
