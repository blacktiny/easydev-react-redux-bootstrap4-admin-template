import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Alerts = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Alerts</h5>
      </div>
      <p>Alerts are based on
        <a href="https://reactstrap.github.io/components/alerts/Alerts.jsx"> reactstrap</a>. Example:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import Alert from 'template/src/components/Alert';

export default class Example extends PureComponent {
  render() {
    return (
      <Alert color='info'>
        <p><span className='bold-text'>Information:</span> Learning day desirous informed expenses
          returned six the. She enabled invited exposed him another.</p>
      </Alert>
    )
  }
}`}
      </CodeHighlither>
      <p>Props of Alerts:</p>
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
            <td>color</td>
            <td>string</td>
            <td>One of the following colors:
              <span className="red-text"> {' \'info\''}</span>,
              <span className="red-text"> {' \'primary\''}</span>,
              <span className="red-text"> {' \'warning\''}</span> or
              <span className="red-text"> {' \'danger\''}</span>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>bool</td>
            <td>Show or not icon</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>One of the following styles:
              <span className="red-text"> {' \'alert--bordered\''}</span>,
              <span className="red-text"> {' \'alert--colored\''}</span>,
              <span className="red-text"> {' \'alert--neutral\''}</span> or your own
            </td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/alert.scss</b></p>
    </CardBody>
  </Card>
);

export default Alerts;
