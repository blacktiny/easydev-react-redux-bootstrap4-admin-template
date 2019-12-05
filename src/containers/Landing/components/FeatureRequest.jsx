import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const FeatureRequest = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">Feature request</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p className="landing__request">We want to make the EasyDev better and we appreciate your feedback.
                If you have any features suggestions <span role="img" aria-label="hammer and wrench">🛠️</span>, please,
                request it and {'we\'ll'} try to implement them
          </p>
          <div className="landing__center-btn">
            <a
              className="landing__btn"
              href="https://aspiritythemes.typeform.com/to/MrjOAR"
              target="_blank"
              rel="noopener noreferrer"
            >
                  Request features
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FeatureRequest;
