/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import {
  Card, CardBody, Col, Badge,
} from 'reactstrap';
import CheckIcon from 'mdi-react/CheckIcon';
import PropTypes from 'prop-types';

const CheckBox = ({ checked, id }) => (
  <label htmlFor={`profile-task-${id}`} className="checkbox-btn profile__current-task-checkbox">
    <input id={`profile-task-${id}`} className="checkbox-btn__checkbox" type="checkbox" defaultChecked={checked} />
    <span className="checkbox-btn__checkbox-custom">
      <CheckIcon />
    </span>
  </label>
);

CheckBox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
};

CheckBox.defaultProps = {
  checked: false,
  id: '',
};

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <p className="profile__current-tasks-title">Current tasks <span>12</span></p>
        <div className="profile__current-tasks">
          <div className="profile__current-task">
            <CheckBox /> Create screens of Mobile App <Badge color="info">New</Badge>
          </div>
          <div className="profile__current-task">
            <CheckBox checked id="0" />
              Write Cris about the bag report
          </div>
          <div className="profile__current-task">
            <CheckBox id="1" />Test new system of versions control <Badge color="error">Priority</Badge>
          </div>
          <div className="profile__current-task">
            <CheckBox id="2" />
              Design new layout for message page in Partnership project
          </div>
          <div className="profile__current-task">
            <CheckBox id="3" /> Test new system of versions control <Badge color="error">Priority</Badge>
          </div>
          <div className="profile__current-task">
            <CheckBox id="4" />
              Design new layout for message page in Partnership project
          </div>
          <a href="/" className="profile__see-all-tasks">See all tasks</a>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProfileMain;
