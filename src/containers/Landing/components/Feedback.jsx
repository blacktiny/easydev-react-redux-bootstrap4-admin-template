import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const background = `${process.env.PUBLIC_URL}/img/landing/design_code_bg.png`;
const designAndCodeImg = `${process.env.PUBLIC_URL}/img/landing/design_and_code.svg`;
const macbookImg = `${process.env.PUBLIC_URL}/img/landing/feedback_macbook.png`;

const Feedback = () => (
  <div className="landing__feedback" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="landing__feedback-title"><b>Hey guys!</b></h2>
          <p className="landing__feedback-subhead">
            We are glad to offer you the EasyDev customization from light modernization to a super-custom
            development according to your project.  Please, contact us via <b>biz@aspirity.com</b> to discuss our
            work or just press the button below.
          </p>
          <div className="landing__feedback-form">
            <a
              className="landing__btn landing__btn--feedback"
              href="https://www.aspirity.com/contact-us"
              rel="noopener noreferrer"
              target="_blank"
            >
              Let{'\''}s work!
            </a>
          </div>
          <img className="landing__feedback-design-img" src={designAndCodeImg} alt="design and code" />
          <img className="landing__feedback-macbook-img" src={macbookImg} alt="macbook" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Feedback;
