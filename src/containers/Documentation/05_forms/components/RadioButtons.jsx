import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const RadioButtons = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Radiobutton</h5>
      </div>
      <p>Checkbox is placed in <b>template/src/components/form/RadioButton.js</b>. Example of
            using this component here:
      </p>
      <CodeHighlither>
        {'import renderRadioButtonField from \'../../../../components/form/RadioButton\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='radiobutton'
  component={renderCheckBoxField}
  label='Radio button'
  radioValue='1'
/>`}
      </CodeHighlither>
      <p>Props of RadioButton:</p>
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
            <td>label</td>
            <td>string</td>
            <td>Text right from checkbox</td>
          </tr>
          <tr>
            <td>defaultChecked</td>
            <td>bool</td>
            <td>Checked or not after render</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>bool</td>
            <td>Disable input</td>
          </tr>
          <tr>
            <td>radioValue</td>
            <td>string</td>
            <td>Value of radiobutton</td>
          </tr>
          <tr>
            <td>class</td>
            <td>string</td>
            <td>
              <span className="red-text"> {'\'colored\''}</span>,
              <span className="red-text"> {'\'button\''}</span>,
              <span className="red-text"> {'\'colored-click\''}</span> or nothing
            </td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/radio-btn.scss</b></p>
    </CardBody>
  </Card>
);

export default RadioButtons;
