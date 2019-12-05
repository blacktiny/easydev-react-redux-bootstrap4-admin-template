import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const background = `${process.env.PUBLIC_URL}/img/landing/header_bg.png`;
const img = `${process.env.PUBLIC_URL}/img/landing/macbook.png`;

const Header = ({ onClick }) => (
  <div className="landing__header" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="landing__header-title">The best documented and cleanest coded
            <b> React Bootstrap 4</b> Admin Template <br />+ <b>Seed Project</b> Inside!<br />
            + (NEW) <b>Authorization</b> with Firebase, Auth0, Google and Facebook accounts
          </h2>
          <p className="landing__header-subhead">We guarantee you will always get the actual version of the template
            with a bunch of{' '}
            <Link className="landing__header-subhead-update" to="/documentation/changelog" target="_blank">
              freshest updates
            </Link>.
          </p>
          <Link className="landing__btn landing__btn--header" to="/documentation/introduction" target="_blank">
            Check out the docs
          </Link>
          <button type="button" className="landing__btn landing__btn--header" onClick={onClick}>
            Go to demo
          </button>
          <img className="landing__header-img" src={img} alt="macbook" />
        </Col>
      </Row>
    </Container>
  </div>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
