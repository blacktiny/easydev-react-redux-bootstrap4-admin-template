import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
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
});

class DynamiclyRefreshedDoughnut extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: getState(),
      intervalId: null,
    };
  }

  componentWillMount() {
    const intervalId = setInterval(() => {
      this.setState({ data: getState() });
    }, 4000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  render() {
    const { t } = this.props;
    const { data } = this.state;

    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('charts.react_chartjs.dynamicly_refreshed_doughnut')}</h5>
            </div>
            <Doughnut data={data} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(DynamiclyRefreshedDoughnut);
