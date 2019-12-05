import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Carousel = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Carousel</h5>
      </div>
      <p>Carousels is based on <a href="https://github.com/akiran/react-slick">react-slick</a>. The template has two
            ready types of them:
      </p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import Carousel from 'template/src/components/carousel/CarouselSingle'; // or CarouselMultiply
import Slide1 from 'imgs/img/5.png';
import Slide2 from 'imgs/img/6.png';

export default class Example extends PureComponent {
  render() {
    return (
      <Carousel>
        <div><img src={Slide1} alt='slide'/></div>
        <div><img src={Slide2} alt='slide'/></div>
        <div><img src={Slide1} alt='slide'/></div>
        <div><img src={Slide2} alt='slide'/></div>
      </Carousel>
    )
  }
}`}
      </CodeHighlither>
      <p>Stylesheet: <b>template/src/scss/components/carousel.scss</b></p>
    </CardBody>
  </Card>
);

export default Carousel;
