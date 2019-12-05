import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const ProgressBars = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Progress Bars</h5>
      </div>
      <p>Progress is based on <a href="https://reactstrap.github.io/components/progress/">reactstrap</a>. Example of
            using this component here:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import {Progress} from 'reactstrap';

export default class Example extends PureComponent {
  render() {
    return (
      <div className='progress-wrap'>
        <Progress value={70}>70%</Progress>
      </div>
    )
  }
}`}
      </CodeHighlither>
      <p>To change progress bar style you need to add className to <b>{'\'progress-wrap\''}</b>:</p>
      <ol>
        <li>To change color:
          <span className="red-text"> {'\'progress-wrap--yellow\''}</span>,
          <span className="red-text"> {'\'progress-wrap--violet\''}</span>,
          <span className="red-text"> {'\'progress-wrap--pink\''}</span>,
          <span className="red-text"> {'\'progress-wrap--blue\''}</span>
        </li>
        <li>To change size:
          <span className="red-text"> {'\'progress-wrap--small\''}</span>,
          <span className="red-text"> {'\'progress-wrap--middle\''}</span>,
          <span className="red-text"> {'\'progress-wrap--big\''}</span>
        </li>
      </ol>
      <p>Stylesheet: <b>template/src/scss/components/progress-bar.scss</b></p>
    </CardBody>
  </Card>
);

export default ProgressBars;
