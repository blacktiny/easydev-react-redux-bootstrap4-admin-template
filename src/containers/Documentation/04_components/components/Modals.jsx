import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Modals = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Modals</h5>
      </div>
      <p>Modals are based on
        <a href="https://reactstrap.github.io/components/modals/Modals.jsx"> reactstrap</a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import {Button} from 'reactstrap';
import Modal from 'template/src/components/Modal';

export default class Example extends PureComponent {
  render() {
    return (
      <Modal color='primary' title='Congratulations!'
             message='Expect warmly its tended garden him esteem had remove off. Effects dearest staying
           now sixteen nor improve.'>
        <Button color='primary'>Default</Button>
      </Modal>
    )
  }
}`}
      </CodeHighlither>
      <p>Props of Modal:</p>
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
            <td>color (<span className="red-text">isRequired</span>)</td>
            <td>string</td>
            <td>You can choose one of four colors:
              <span className="red-text">{' \'info\''}</span>,
              <span className="red-text">{' \'primary\''}</span>,
              <span className="red-text">{' \'warning\''}</span> or
              <span className="red-text">{' \'danger\''}</span>
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td />
          </tr>
          <tr>
            <td>message</td>
            <td>string</td>
            <td>Content of modal</td>
          </tr>
          <tr>
            <td>colored</td>
            <td>bool</td>
            <td>Colored background of modal</td>
          </tr>
          <tr>
            <td>header</td>
            <td>bool</td>
            <td>{'Colored background of modal\'s header'}</td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/modal.scss</b></p>
    </CardBody>
  </Card>
);

export default Modals;
