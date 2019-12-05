import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const DropZones = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">DropZones</h5>
      </div>
      <p>DropZones are based on <a href="https://github.com/react-dropzone/react-dropzone/">react-dropzone</a>.
            There are two types of this component in the template. The first is dropzone with multiple files upload:
      </p>
      <CodeHighlither>
        {'import renderDropZoneMultipleField from \'../../../../components/form/DropZoneMultiple\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='files'
  component={renderDropZoneMultipleField}
/>`}
      </CodeHighlither>
      <p>And with upload of one file:</p>
      <CodeHighlither>
        {'import renderDropZoneField from \'../../../../components/form/DropZone\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='files'
  component={renderDropZoneField}
/>`}
      </CodeHighlither>
      <p>Props of DropZone:</p>
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
            <td>customHeight</td>
            <td>bool</td>
            <td>If <span className="red-text">true</span>: DropZone will change height after upload</td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/dropzone.scss</b></p>
    </CardBody>
  </Card>
);

export default DropZones;
