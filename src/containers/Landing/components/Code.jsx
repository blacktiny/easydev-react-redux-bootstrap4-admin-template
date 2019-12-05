import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const codeExample = `${process.env.PUBLIC_URL}/img/landing/code_example.png`;
const responsive = `${process.env.PUBLIC_URL}/img/landing/admin_book.png`;
const background = `${process.env.PUBLIC_URL}/img/landing/right_bg.png`;

const Technologies = () => (
  <section className="landing__section">
    <img className="landing__section-background landing__section-background--technologies" src={background} alt="" />
    <Container>
      <Row className="landing__code landing__code--first landing__code--left">
        <Col md={6} sm={12} xs={12}>
          <div className="landing__code-text">
            <div className="landing__code-wrap">
              <h3 className="landing__section-title">Fully Responsive</h3>
              <p className="landing__section-description">
                {'You can use the Easydev on all devices - it\'ll look great everywhere!'}
              </p>
              <p className="landing__section-description">
                Lazy loading allows your device to display the graphic content softly and correctly
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <div className="landing__code-img landing__code-img--no-shadow">
            <div className="landing__code-wrap">
              <img className="landing__img landing__img--over" src={responsive} alt="" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="landing__code landing__code--right">
        <Col md={6} sm={12} xs={12}>
          <div className="landing__code-text">
            <div className="landing__code-wrap">
              <h3 className="landing__section-title">Clean and Professional Code</h3>
              <p className="landing__section-description">We have created a quality product that will be convenient
                for developers to use. The main advantage is a clean, correct and easy to understand code.
              </p>
              <p className="landing__section-description">React framework allows you to create a component
                architecture, get the best productivity and render changes automatically.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <div className="landing__code-img landing__code-img--no-shadow">
            <div className="landing__code-wrap">
              <img className="landing__img landing__img--over-right" src={codeExample} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Technologies;
