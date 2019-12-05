import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const TimePicker = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">TimePicker</h5>
      </div>
      <p>TimePicker is based on <a href="https://github.com/react-component/time-picker">rc-time-picker</a>.
            Example of using this component here:
      </p>
      <CodeHighlither>
        {'import renderTimePickerField from \'../../../../components/form/TimePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='time'
  component={renderTimePickerField}
/>`}
      </CodeHighlither>
      <p>Props of TimePicker:</p>
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
            <td>timeMode</td>
            <td>bool</td>
            <td>If <span className="red-text">true</span>: 12 hours mode. Default:
              <span className="red-text"> false</span>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/time-picker.scss</b></p>
    </CardBody>
  </Card>
);

export default TimePicker;
