import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  HorizontalGridLines, LineMarkSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function getRandomData() {
  return (new Array(500)).fill(0).map((row, i) => ({
    x: i,
    y: Math.random() * 20,
  }));
}

class LineSeriesCanvas extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      data: getRandomData(),
    };
  }

  render() {
    const { data } = this.state;

    const lineSeriesProps = {
      color: '#70bbfd',
      strokeWidth: 1,
      data,
    };
    const { t } = this.props;

    return (
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('charts.react_vis.line_series_canvas')}</h5>
            </div>
            <div className="react-vis" dir="ltr">
              <FlexibleWidthXYPlot
                height={300}
              >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineMarkSeries
                  className="react-vis__svg-line"
                  {...lineSeriesProps}
                />
              </FlexibleWidthXYPlot>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(LineSeriesCanvas);
