import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function getRandomData() {
  return (new Array(100)).fill(0).map(() => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: Math.random() * 10,
    color: Math.random() * 10,
    opacity: (Math.random() * 0.5) + 0.5,
  }));
}

const MarkSeriesCanvas = ({ t }) => (
  <Col xs={12} md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('charts.react_vis.mark_series_canvas')}</h5>
        </div>
        <div className="react-vis" dir="ltr">
          <FlexibleWidthXYPlot
            height={300}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <MarkSeries
              className="mark-series-example"
              strokeWidth={2}
              opacity="0.8"
              sizeRange={[5, 15]}
              data={getRandomData()}
              colorRange={['#70bbfd', '#c88ffa']}
            />
          </FlexibleWidthXYPlot>
        </div>
      </CardBody>
    </Card>
  </Col>
);

MarkSeriesCanvas.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(MarkSeriesCanvas);
