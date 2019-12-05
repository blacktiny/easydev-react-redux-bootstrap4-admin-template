/* eslint-disable react/no-typos */
import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProps } from '../../../shared/prop-types/ReducerProps';

const crypto = `${process.env.PUBLIC_URL}/img/landing/demos/4.png`;
const eCommerce = `${process.env.PUBLIC_URL}/img/landing/demos/3.png`;
const analytics = `${process.env.PUBLIC_URL}/img/landing/demos/1.png`;
const fitness = `${process.env.PUBLIC_URL}/img/landing/demos/2.png`;
const booking = `${process.env.PUBLIC_URL}/img/landing/demos/5.png`;
const mobileApp = `${process.env.PUBLIC_URL}/img/landing/demos/6.png`;

const cryptoDark = `${process.env.PUBLIC_URL}/img/landing/demos/1_3.png`;
const eCommerceDark = `${process.env.PUBLIC_URL}/img/landing/demos/1_2.png`;
const analyticsDark = `${process.env.PUBLIC_URL}/img/landing/demos/1_1.png`;
const fitnessDark = `${process.env.PUBLIC_URL}/img/landing/demos/fitness_dark.png`;
const bookingDark = `${process.env.PUBLIC_URL}/img/landing/demos/booking_dark.png`;
const mobileAppDark = `${process.env.PUBLIC_URL}/img/landing/demos/mobile_app_dark.png`;

const background = `${process.env.PUBLIC_URL}/img/landing/left_bg.png`;

const DemoThemeToggle = ({ theme, changeToLight, changeToDark }) => (
  <div className="landing__demo-toggle-wrap">
    <span>Light</span>
    <div className="toggle-btn landing__demo-toggle">
      <input
        className="toggle-btn__input"
        type="checkbox"
        name="demos"
        checked={theme.className === 'theme-dark'}
        onChange={() => {}}
      />
      <button
        type="button"
        className="toggle-btn__input-label"
        onClick={theme.className === 'theme-dark' ? changeToLight : changeToDark}
      >Toggle
      </button>
    </div>
    <span>Dark</span>
  </div>
);

DemoThemeToggle.propTypes = {
  theme: ThemeProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
};

class Demos extends PureComponent {
  static propTypes = {
    theme: ThemeProps.isRequired,
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
  };

  render() {
    const { theme, changeToLight, changeToDark } = this.props;

    return (
      <section className="landing__section landing__section--demos">
        <img className="landing__section-background landing__section-background--demos" src={background} alt="" />
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="landing__section-title">EasyDEV Demos</h3>
            </Col>
          </Row>
          <Row className="landing__demo-wrap">
            <Col lg={8}>
              <Link className="landing__demo" target="_blank" to="/dashboard_mobile_app">
                <div className="landing__demo-img-wrap">
                  <img src={theme.className === 'theme-dark' ? mobileAppDark : mobileApp} alt="" />
                </div>
              </Link>
            </Col>
            <Col lg={4} className="landing__demo-theme-toggle">
              <p className="landing__demo-title landing__demo-title--new">Dashboard Mobile App</p>
              <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
            </Col>
          </Row>
          <Row className="landing__demo-wrap">
            <Col lg={8}>
              <Link className="landing__demo" target="_blank" to="/dashboard_booking">
                <div className="landing__demo-img-wrap">
                  <img src={theme.className === 'theme-dark' ? bookingDark : booking} alt="" />
                </div>
              </Link>
            </Col>
            <Col lg={4} className="landing__demo-theme-toggle">
              <p className="landing__demo-title landing__demo-title--new">Booking Dashboard</p>
              <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
            </Col>
          </Row>
          <Row className="landing__demo-wrap">
            <Col lg={8}>
              <Link className="landing__demo" target="_blank" to="/dashboard_crypto">
                <div className="landing__demo-img-wrap">
                  <img src={theme.className === 'theme-dark' ? cryptoDark : crypto} alt="" />
                </div>
              </Link>
            </Col>
            <Col lg={4} className="landing__demo-theme-toggle">
              <p className="landing__demo-title">Crypto Dashboard</p>
              <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
            </Col>
          </Row>
          <Row className="landing__demo-wrap">
            <Col lg={8}>
              <Link className="landing__demo" target="_blank" to="/dashboard_e_commerce">
                <div className="landing__demo-img-wrap">
                  <img src={theme.className === 'theme-dark' ? eCommerceDark : eCommerce} alt="" />
                </div>
              </Link>
            </Col>
            <Col lg={4} className="landing__demo-theme-toggle">
              <p className="landing__demo-title">E-commerce Dashboard</p>
              <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
            </Col>
          </Row>
          <Row className="landing__demo-wrap">
            <Col lg={8}>
              <Link className="landing__demo" target="_blank" to="/dashboard_default">
                <div className="landing__demo-img-wrap">
                  <img src={theme.className === 'theme-dark' ? analyticsDark : analytics} alt="" />
                </div>
              </Link>
            </Col>
            <Col lg={4} className="landing__demo-theme-toggle">
              <p className="landing__demo-title">Default Dashboard</p>
              <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
            </Col>
          </Row>
          <Row className="landing__demo-wrap">
            <Col lg={8}>
              <Link className="landing__demo" target="_blank" to="/dashboard_fitness">
                <div className="landing__demo-img-wrap">
                  <img src={theme.className === 'theme-dark' ? fitnessDark : fitness} alt="" />
                </div>
              </Link>
            </Col>
            <Col lg={4} className="landing__demo-theme-toggle">
              <p className="landing__demo-title">Fitness Dashboard</p>
              <DemoThemeToggle theme={theme} changeToLight={changeToLight} changeToDark={changeToDark} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Demos;
