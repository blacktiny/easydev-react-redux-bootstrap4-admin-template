import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineSeries,
  VerticalRectSeries,
  XAxis,
  YAxis,
} from 'react-vis';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function getRandomSeriesData(total) {
  const result = [];
  let lastY = Math.random() * 40;
  let y;
  const firstY = lastY;
  for (let i = 0; i < Math.max(total, 3); i += 1) {
    y = ((Math.random() * firstY) - (firstY / 2)) + lastY;
    result.push({
      left: i,
      top: y,
    });
    lastY = y;
  }
  return result;
}

class Plots extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    dir: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const totalValues = 30;
    this.state = {
      series: [
        {
          title: 'Apples',
          disabled: false,
          data: getRandomSeriesData(totalValues),
        },
        {
          title: 'Bananas',
          disabled: false,
          data: getRandomSeriesData(totalValues),
        },
      ],
    };
  }

  render() {
    const { series } = this.state;
    const { t, dir } = this.props;

    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('charts.react_vis.plots')}</h5>
            </div>
            <div className="react-vis" dir="ltr">
              <FlexibleWidthXYPlot
                animation
                getX={d => d.left}
                getY={d => d.top}
                xDomain={[0, series[0].data.length - 1]}
                height={300}
              >
                <HorizontalGridLines />
                <YAxis
                  className="cool-custom-name"
                  tickSizeInner={0}
                  tickSizeOuter={8}
                  orientation={dir === 'rtl' ? 'right' : 'left'}
                />
                <XAxis
                  className="even-cooler-custom-name"
                  tickSizeInner={0}
                  tickSizeOuter={8}
                />
                <VerticalRectSeries
                  data={series[0].data.map(({ left, top }) => ({ x0: left, left: left + 1, top }))}
                  stroke="white"
                  {...(series[0].disabled ? { opacity: 0.2 } : null)}
                  color="#70bbfd"
                />
                <LineSeries
                  className="react-vis__svg-line"
                  data={series[1].data}
                  curve="curveMonotoneX"
                  {...(series[1].disabled ? { opacity: 0.2 } : null)}
                  color="#f6da6e"
                />
              </FlexibleWidthXYPlot>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(Plots);
