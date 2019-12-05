/* eslint-disable no-alert */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Pie } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const legendOpts = {
  onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
};

class PolarArea extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      legend: legendOpts,
    };

    this.applyLegendSettings = this.applyLegendSettings.bind(this);
  }

  applyLegendSettings() {
    const { value } = this.legendOptsInput;

    try {
      const opts = JSON.parse(value);
      this.setState({
        legend: opts,
      });
    } catch (e) {
      alert(e.message);
      throw Error(e);
    }
  }

  render() {
    const { t } = this.props;
    const { legend } = this.state;

    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('charts.react_chartjs.legend_handlers')}</h5>
            </div>
            <Pie data={data} legend={legend} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(PolarArea);
