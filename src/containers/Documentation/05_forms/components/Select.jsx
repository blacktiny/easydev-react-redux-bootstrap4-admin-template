/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Select = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Select and MultiSelect</h5>
      </div>
      <p>Select and MultiSelect are based on <a href="https://github.com/JedWatson/react-select">react-select</a>.
            Example of using this component here:
      </p>
      <CodeHighlither>
        {`import renderSelectField from '../../../../components/form/Select';
import renderMultiSelectField from '../../../../components/form/MultiSelect';`}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='select'
  component={renderSelectField}
  options={[
    {value: 'one', label: 'One'},
    {value: 'two', label: 'Two'}
  ]}
/>`}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='multi_select'
  component={renderMultiSelectField}
  options={[
    {value: 'one', label: 'One'},
    {value: 'two', label: 'Two'}
  ]}
/>`}
      </CodeHighlither>
      <p>Props of Select and MultiSelect:</p>
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
            <td>options</td>
            <td>Array&lt;Object></td>
            <td>Array of options</td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/form.scss</b></p>
    </CardBody>
  </Card>
);

export default Select;
