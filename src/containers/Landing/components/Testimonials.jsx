/* eslint-disable max-len */
import React from 'react';
import {
  Col, Row, Container, Card, CardBody,
} from 'reactstrap';
import StarIcon from 'mdi-react/StarIcon';

const Testimonials = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">Our customers say</h3>
        </Col>
      </Row>
      <Row className="landing__testimonials">
        <Col lg={4} md={6}>
          <a
            href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardBody className="landing__testimonial">
                <p className="landing__testimonial-name">by Malsher</p>
                <div className="landing__testimonial-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="landing__testimonial-review">We have used many themes on many projects but none
                that have been so easy to work with. The design has delighted our customer and the code is easy
                to work with. This is the best theme we have used so far.
                </p>
              </CardBody>
            </Card>
          </a>
        </Col>
        <Col lg={4} md={6}>
          <a
            href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardBody className="landing__testimonial">
                <p className="landing__testimonial-name">by wibgyor</p>
                <div className="landing__testimonial-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="landing__testimonial-review">The components have been deigned well, which is
                enabling us to customize it quickly.
                </p>
              </CardBody>
            </Card>
          </a>
        </Col>
        <Col lg={{ size: 4, offset: 0 }} md={{ size: 6, offset: 3 }}>
          <a
            href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/reviews/21798550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardBody className="landing__testimonial">
                <p className="landing__testimonial-name">by jd4ever</p>
                <div className="landing__testimonial-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="landing__testimonial-review">{`I'm very happy with this purchase. This is a single-page
                react app through and through. Clean code and easy to work with`}
                </p>
              </CardBody>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonials;
