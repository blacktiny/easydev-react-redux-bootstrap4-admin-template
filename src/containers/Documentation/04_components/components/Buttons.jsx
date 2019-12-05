import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Buttons = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Buttons</h5>
      </div>
      <p>Buttons are based on
        <a href="https://reactstrap.github.io/components/buttons/Buttons.jsx"> reactstrap</a>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';

export default class Example extends PureComponent {
  render() {
    return (
      <ButtonToolbar>
        <Button outline>Minimal</Button>
        <Button disabled>Disabled</Button>
        <Button color='primary'>Primary</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
        <Button className='icon' color='danger'><p><CloseCircleOutlineIcon/> Warning</p></Button>
        <Button className='icon icon--right' color='primary' outline><p>Settings <SendIcon/></p></Button>
      </ButtonToolbar>
    )
  }
}`}
      </CodeHighlither>
      <p>All props of Button
        <a href="https://reactstrap.github.io/components/buttons/Buttons.jsx"> here</a>. There are some of them:
      </p>
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
              <span className="red-text"> {' \'info\''}</span>,
              <span className="red-text"> {' \'primary\''}</span>,
              <span className="red-text"> {'\'warning\''}</span> or
              <span className="red-text"> {'\'danger\''}</span>
            </td>
          </tr>
          <tr>
            <td>outline</td>
            <td>bool</td>
            <td>Outline or filled button</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>
              <span className="red-text"> {'\'sm\''}</span> for small buttons and
              <span className="red-text"> {'\'lg\' '}</span>
                for large
            </td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>
              <span className="red-text">{'\'icon\''}</span>,
              <span className="red-text"> {'\'icon icon--right\''}</span> for
                buttons with icons,
              <span className="red-text"> {'\'rounded\''}</span> for buttons without corners,
              <span className="red-text"> {'\'square\''}</span> for rectangular buttons
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="card__title">
        <h5 className="bold-text">Expand</h5>
      </div>
      <p> Expand is based on Button above, but with loading effect. You have to write your own loading logic to use
            it. The component replaced in <b>template/src/components/Expand.js</b>
      </p>

      <div className="card__title">
        <h5 className="bold-text">Button Groups</h5>
      </div>
      <p>
        More about ButtonGroup <a href="https://reactstrap.github.io/components/button-group/">here</a>. The
            template has examples with next values of <b>className</b>:
        <span className="red-text"> {'\'btn-group--icons\''}</span> and
        <span className="red-text"> {'\'btn-group--justified\''}</span>.
      </p>
      <p>Stylesheet: <b>template/src/scss/components/btn.scss</b></p>
    </CardBody>
  </Card>
);

export default Buttons;
