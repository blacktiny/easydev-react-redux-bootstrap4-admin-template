import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import TextEditor from '../../../../shared/components/text-editor/TextEditor';

const Editor = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <TextEditor onChange={() => {}} />
      </CardBody>
    </Card>
  </Col>
);

export default Editor;
