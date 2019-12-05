import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Collapse = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Collapse</h5>
      </div>
      <p>Collapse is based on
        <a href="https://reactstrap.github.io/components/collapse/Collapse.jsx"> reactstrap</a>. Example of using
        this component here:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import Collapse from 'template/src/components/Collapse';

export default class Example extends PureComponent {
  render() {
    return (
      <Collapse title='What is the most featured item?' className='boxed'>
        <p>No comfort written conduct at prevent manners on.</p>
      </Collapse>
    )
  }
}`}
      </CodeHighlither>
      <p>Props of Collapse:</p>
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
            <td>title</td>
            <td>string</td>
            <td />
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>You can change basic style:
              <span className="red-text"> {'\'boxed\''}</span>,
              <span className="red-text"> {'\'boxed colored\''}</span>,
              <span className="red-text"> {'\'faq\''}</span> and yours
            </td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/collapse.scss</b></p>
    </CardBody>
  </Card>
);

export default Collapse;
