import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import BigCalendar from './components/BigCalendar';
import EventLabels from './components/EventLabels';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const Calendar = ({ rtl }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Calendar</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <BigCalendar dir={rtl.direction} />
      <EventLabels />
    </Row>
  </Container>
);

Calendar.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(Calendar);
