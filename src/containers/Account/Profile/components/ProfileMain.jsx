import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <div className="profile__information">
          <div className="profile__avatar">
            <img src={Ava} alt="avatar" />
          </div>
          <div className="profile__data">
            <p className="profile__name">Larry Boom</p>
            <p className="profile__work">Senior Account Manager</p>
            <p className="profile__contact">mailmethisletter@gmail.com</p>
            <p className="profile__contact" dir="ltr">+23-123-743-23-21</p>
            <Button color="primary" className="icon profile__btn"><p><MessageTextOutlineIcon /> Message</p></Button>
          </div>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">05</p>
            <p className="profile__stat-title">Projects</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">24</p>
            <p className="profile__stat-title">Tasks</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">12</p>
            <p className="profile__stat-title">Reports</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProfileMain;
