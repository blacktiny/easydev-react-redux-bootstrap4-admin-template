import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const RangeSliders = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Range Sliders</h5>
      </div>
      <p>Sliders are based on <a href="https://github.com/schrodinger/rc-slider">rc-slider</a>. The template has two
        types of Sliders: one-value slider and range slider.
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import Slider from 'template/src/components/range_slider/Slider'; // or Range

export default class Example extends PureComponent {
  render() {
    return (
      <Slider min={0} max={100} value={34}
              marks={{0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100'}}/>
    )
  }
}`}
      </CodeHighlither>
      <p>Props of Slider and Range:</p>
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
            <td>min (<span className="red-text">isRequired</span>)</td>
            <td>number</td>
            <td>Minimal value of slider</td>
          </tr>
          <tr>
            <td>max (<span className="red-text">isRequired</span>)</td>
            <td>number</td>
            <td>Maximum value of slider</td>
          </tr>
          <tr>
            <td>value</td>
            <td>number</td>
            <td>Start point</td>
          </tr>
          <tr>
            <td>tipFormatter</td>
            <td>func</td>
            <td>{'Format of tooltip: e.g. tipFormatter={value => value}'}</td>
          </tr>
          <tr>
            <td>marks</td>
            <td>object</td>
            <td>Mark on the slider</td>
          </tr>
        </tbody>
      </Table>
      <p>Stylesheet: <b>template/src/scss/components/slider.scss</b></p>
    </CardBody>
  </Card>
);

export default RangeSliders;
