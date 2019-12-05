import React from 'react';
import { Col } from 'reactstrap';
import TimeLineItem from '../../../../shared/components/TimeLineItem';

const Ava1 = `${process.env.PUBLIC_URL}/img/14.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/15.png`;

const TimelineHistory = () => (
  <Col md={12}>
    <div className="timeline">
      <TimeLineItem type="work" title="Business meetup" date="3 hours ago">
        <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
              sometimes additions recommend fat our.
        </p>
      </TimeLineItem>
      <TimeLineItem type="video" title="Video conference with client" date="5 hours ago">
        <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
              sometimes additions recommend fat our.
        </p>
      </TimeLineItem>
      <TimeLineItem img={Ava1} title="Call to Jovanna" date="8 hours ago">
        <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
              sometimes additions recommend fat our.
        </p>
      </TimeLineItem>
      <TimeLineItem type="file" title="Create offer. Prepare document" date="Yesterday at 18:30">
        <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
              sometimes additions recommend fat our.
        </p>
      </TimeLineItem>
      <TimeLineItem img={Ava2} title="Conversation with Philip" date="21.03.2017">
        <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
              sometimes additions recommend fat our.
        </p>
      </TimeLineItem>
    </div>
  </Col>
);

export default TimelineHistory;
