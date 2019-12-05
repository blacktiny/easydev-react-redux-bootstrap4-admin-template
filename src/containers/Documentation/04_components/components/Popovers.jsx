import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Popovers = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Popovers</h5>
      </div>
      <p>Popovers are based on
        <a href="https://reactstrap.github.io/components/popovers/Popovers.jsx"> reactstrap</a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import {ButtonToolbar, Button, Popover, PopoverBody, PopoverHeader} from 'reactstrap';

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  
  render() {
    return (
      <ButtonToolbar className='btn-toolbar--center'>
        <Button id='PopoverTop' onClick={this.toggle} outline>Popover on Top</Button>
        <Popover placement='top' isOpen={this.state.popoverOpen} target='PopoverTop'
                 toggle={this.toggle}>
          <PopoverHeader>Popover on Top</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</PopoverBody>
        </Popover>
      </ButtonToolbar>
    )
  }
}`}
      </CodeHighlither>
      <p>All props <a href="https://reactstrap.github.io/components/popovers/Popovers.jsx">here</a>.</p>
      <p>Stylesheet: <b>template/src/scss/components/popover.scss</b></p>
    </CardBody>
  </Card>
);

export default Popovers;
