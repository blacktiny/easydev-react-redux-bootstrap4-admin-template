import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Panel = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Panel</h5>
      </div>
      <p>Panel is based on Col, Card and CardBody from
        <a href="https://reactstrap.github.io/components/alerts/"> reactstrap</a>. Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import Panel from 'template/src/components/Panel';

export default class Example extends PureComponent {
  render() {
    return (
      <Panel xs={12} md={12} lg={6} title='Default panel'>
        <p>Folly words widow one downs few age every seven. Discovered had get considered
          projection who favourable. Necessary up knowledge it tolerably.</p>
      </Panel>
    )
  }
}`}
      </CodeHighlither>
      <p>Props of Panel:</p>
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
            <td>You can choose one of four colors:
              <span className="red-text"> {'\'info\''}</span>,
              <span className="red-text"> {'\'primary\''}</span>,
              <span className="red-text"> {'\'warning\''}</span> or
              <span className="red-text"> {'\'danger\''}</span>
            </td>
          </tr>
          <tr>
            <td>divider</td>
            <td>bool</td>
            <td>Add header divider</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td />
          </tr>
          <tr>
            <td>subhead</td>
            <td>string</td>
            <td>Add subhead</td>
          </tr>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>Add label to the right from title</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>Add icon from <a href="https://linearicons.com/free">Linearicons</a> to the left from title:
                e.g. <span className="red-text">{'\'magic-wand\''}</span>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/panel.scss</b></p>
    </CardBody>
  </Card>
);

export default Panel;
