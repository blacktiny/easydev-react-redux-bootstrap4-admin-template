import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LineSeriesChart = ({ t }) => (
  <Col xs={12} md={12} lg={12} xl={4}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('charts.react_vis.line_series')}</h5>
        </div>
        <div className="react-vis" dir="ltr">
          <FlexibleWidthXYPlot height={250}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries
              className="react-vis__svg-line"
              curve="curveMonotoneX"
              data={[
                { x: 1, y: 3 },
                { x: 2, y: 5 },
                { x: 3, y: 15 },
                { x: 4, y: 12 },
              ]}
              color="#70bbfd"
            />
            <LineSeries
              className="react-vis__svg-line"
              curve="curveMonotoneX"
              data={[
                { x: 1, y: 10 },
                { x: 2, y: 4 },
                { x: 3, y: 2 },
                { x: 4, y: 15 },
              ]}
              color="#c88ffa"
            />
            <LineSeries
              className="react-vis__svg-line"
              curve="curveMonotoneX"
              data={[
                { x: 1, y: 7 },
                { x: 2, y: 11 },
                { x: 3, y: 9 },
                { x: 4, y: 2 },
              ]}
              color="#f6da6e"
            />
          </FlexibleWidthXYPlot>
        </div>
      </CardBody>
    </Card>
  </Col>
);

LineSeriesChart.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(LineSeriesChart);
