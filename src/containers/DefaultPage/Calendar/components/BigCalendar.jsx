import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col } from 'reactstrap';
import Calendar from '../../../../shared/components/Calendar';
import events from './events';

const BigCalendar = ({ dir }) => (
  <Col md={12} lg={12} xl={9}>
    <Card>
      <CardBody>
        <Calendar dir={dir} events={events} />
      </CardBody>
    </Card>
  </Col>
);

BigCalendar.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default BigCalendar;
