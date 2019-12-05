import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Tooltips = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Tooltips</h5>
      </div>
      <p>Tooltips are based on
        <a href="https://reactstrap.github.io/components/tooltips/Tooltips.jsx"> reactstrap</a>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import {Button, ButtonToolbar UncontrolledTooltip} from 'reactstrap';

export default class Example extends PureComponent {
  render() {
    return (
      <ButtonToolbar className='btn-toolbar--center'>
        <Button id='TooltipTop' outline>Tooltip on Top</Button>
        <UncontrolledTooltip placement='top' target='TooltipTop'>
          Do you like dragons?
        </UncontrolledTooltip>
      </ButtonToolbar>
    )
  }
}`}
      </CodeHighlither>
      <p>All props <a href="https://reactstrap.github.io/components/tooltips/Tooltips.jsx">here</a>.</p>
      <p>Stylesheet: <b>template/src/scss/components/tooltip.scss</b></p>
    </CardBody>
  </Card>
);

export default Tooltips;
