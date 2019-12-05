import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const background = `${process.env.PUBLIC_URL}/img/landing/footer_bg.png`;

const Footer = () => (
  <footer className="landing__footer">
    <img className="landing__footer-background" src={background} alt="" />
    <Container>
      <Row>
        <Col md={12}>
          <p className="landing__footer-text">Made with love and tons of coffee in
            <b><a target="_blank" rel="noopener noreferrer" href="http://themes.aspirity.com/"> Aspirity Studio</a></b>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
