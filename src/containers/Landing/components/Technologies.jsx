import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const react = `${process.env.PUBLIC_URL}/img/landing/technologies/react.png`;
const bootstrap = `${process.env.PUBLIC_URL}/img/landing/technologies/bootstrap-stack.png`;
const router = `${process.env.PUBLIC_URL}/img/landing/technologies/router.png`;
const reduxForm = `${process.env.PUBLIC_URL}/img/landing/technologies/redux_form.png`;
const sass = `${process.env.PUBLIC_URL}/img/landing/technologies/sass.png`;
const matUi = `${process.env.PUBLIC_URL}/img/landing/technologies/mat_ui.png`;
const redux = `${process.env.PUBLIC_URL}/img/landing/technologies/redux.png`;

const Technologies = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">The EasyDev based on popular and powerful technological stack.
                That’s why it allows you to create massive and serious projects easily.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 3, offset: 3 }} sm={6} xs={12}>
          <div className="landing__technology">
            <div className="landing__technology-img-wrap">
              <img className="landing__technology-img" src={react} alt="react" />
            </div>
            <p className="landing__technology-title">React Based App</p>
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="landing__technology">
            <div className="landing__technology-img-wrap">
              <img className="landing__technology-img" src={bootstrap} alt="bootstrap" />
            </div>
            <p className="landing__technology-title">Bootstrap 4 framework</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 2, offset: 1 }} sm={4} xs={6}>
          <div className="landing__technology landing__technology--small">
            <div className="landing__technology-img-wrap">
              <img className="landing__technology-img" src={router} alt="router" />
            </div>
            <p className="landing__technology-title">React Router</p>
          </div>
        </Col>
        <Col md={2} sm={4} xs={6}>
          <div className="landing__technology landing__technology--small">
            <div className="landing__technology-img-wrap">
              <img className="landing__technology-img" src={reduxForm} alt="redux_form" />
            </div>
            <p className="landing__technology-title">Redux Form</p>
          </div>
        </Col>
        <Col md={2} sm={4} xs={6}>
          <div className="landing__technology landing__technology--small">
            <div className="landing__technology-img-wrap">
              <img className="landing__technology-img" src={sass} alt="sass" />
            </div>
            <p className="landing__technology-title">SCSS Preprocessor</p>
          </div>
        </Col>
        <Col md={{ size: 2, offset: 0 }} sm={{ size: 4, offset: 2 }} xs={6}>
          <div className="landing__technology landing__technology--small">
            <div className="landing__technology-img-wrap">
              <img className="landing__technology-img" src={matUi} alt="mat_ui" />
            </div>
            <p className="landing__technology-title">Material UI</p>
          </div>
        </Col>
        <Col md={2} sm={{ size: 4, offset: 0 }} xs={{ size: 6, offset: 3 }}>
          <div className="landing__technology landing__technology--small">
            <div className="landing__technology-img-wrap">
              <img className="landing__technology-img" src={redux} alt="redux" />
            </div>
            <p className="landing__technology-title">Redux</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Technologies;
