/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const TimeLine = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Timeline</h5>
      </div>
      <p>Timeline is placed in <b>template/src/components/TimeLineItem.js</b></p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import TimeLineItem from 'template/src/components/TimeLineItem';
import Ava1 from '../../../../img/14.png';
import Ava2 from '../../../../img/15.png';

export default class Example extends PureComponent {
  render() {
    return (
      <div className='timeline'>
        <TimeLineItem type='work' title='Business meetup' date='3 hours ago'>
          <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
            sometimes additions recommend fat our.</p>
        </TimeLineItem>
        <TimeLineItem type='video' title='Video conference with client' date='5 hours ago'>
          <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
            sometimes additions recommend fat our.</p>
        </TimeLineItem>
        <TimeLineItem img={Ava1} title='Call to Jovanna' date='8 hours ago'>
          <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
            sometimes additions recommend fat our.</p>
        </TimeLineItem>
        <TimeLineItem type='file' title='Create offer. Prepare document' date='Yesterday at 18:30'>
          <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
            sometimes additions recommend fat our.</p>
        </TimeLineItem>
        <TimeLineItem img={Ava2} title='Conversation with Philip' date='21.03.2017'>
          <p>Dependent certainty off discovery him his tolerably offending. Ham for attention remainder
            sometimes additions recommend fat our.</p>
        </TimeLineItem>
      </div>
    )
  }
}`}
      </CodeHighlither>
      <p>Props of TimeLineItem:</p>
      <Table responsive className="table--bordered table--head-accent">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>img</td>
            <td>string</td>
            <td>Path to image</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td />
          </tr>
          <tr>
            <td>date</td>
            <td>string</td>
            <td>Date of a event</td>
          </tr>
          <tr>
            <td>type</td>
            <td>string</td>
            <td>One of the following:
              <span className="red-text"> 'work'</span>,
              <span className="red-text"> 'video'</span>,
              <span className="red-text"> 'file'</span>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/timeline.scss</b></p>
    </CardBody>
  </Card>
);

export default TimeLine;
