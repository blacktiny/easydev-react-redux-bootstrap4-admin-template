import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Intro = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Components</h5>
      </div>
      <p>These are the examples of using template components. All
            components have a basic structure and configuration. Just copy a component with its styles to your
            project.
      </p>
      <p>Most of components are based on <a href="https://reactstrap.github.io/">reactstrap</a> and some of them on
        <a href="https://material-ui-next.com/"> Material-UI</a>. You can read about all used packages in a
        description of components below and <Link to="/documentation/resources">here</Link>.
      </p>
    </CardBody>
  </Card>
);

export default Intro;
