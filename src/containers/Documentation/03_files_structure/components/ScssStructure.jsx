import React from 'react';
import { Card, CardBody } from 'reactstrap';

const ScssStructure = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">SCSS Structure</h5>
      </div>
      <p>You can learn more about SASS (Syntactically Awesome Style Sheets) on
        <a href="https://sass-lang.com/"> sass-lang.com</a>
      </p>
      <pre className="documentation__structure">
        <code>
          {`|——scss/
|  |——base/             --base styles
|  |——components/       --styles of components
|  |——generic/          --normalizing styles
|  |——objects/          --layout
|  |——containers/       --some containers styles
|  |——settings/         --variables, themes
|  |——app.scss          --main file
|  |——vendor.scss
`}
        </code>
      </pre>
    </CardBody>
  </Card>
);

export default ScssStructure;
