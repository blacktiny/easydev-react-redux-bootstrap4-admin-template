import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const UseColorTheme = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Use Color Theme</h5>
      </div>
      <p>{'This is an example of using themes\' variables in stylesheets:'}</p>
      <CodeHighlither scss>
        {`body {

  @include themify($themes) {
    color: themed('colorText');
  }
}`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default UseColorTheme;
